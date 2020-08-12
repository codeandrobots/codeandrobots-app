import firebase from 'react-native-firebase'
import { AppState } from 'react-native'
import type { Notification, NotificationOpen } from 'react-native-firebase'

import Config from 'react-native-config'

import { isSimulator } from 'App/Services/Properties'

// TODO Make subscribeToTopics logic smarter when there are multiple channels
const subscribeToTopics = (credentials) => {
  firebase.messaging().subscribeToTopic(Config.FIREBASE_TOPIC)

  // Subscribe to user.id topic for sending notifications to single devices
  if (credentials &&
      credentials.user &&
      credentials.user.id) {
    firebase.messaging().subscribeToTopic(credentials.user.id)
  }
}

export const subscribeToSubTopic = (credentials, subTopic) => {
  firebase.messaging().subscribeToTopic(Config.FIREBASE_TOPIC + subTopic)
}

export const unsubscribeFromSubTopic = (credentials, subTopic) => {
  firebase.messaging().unsubscribeFromTopic(Config.FIREBASE_TOPIC + subTopic)
}

// If app active, then show 'in-app' notification
const getInAppNotificationTitle = (credentials, notification) => {
  if (!notification.data || AppState.currentState !== 'active') {
    return null
  }
  const type = notification.data.type
  let notificationTitle = null
  switch (type) {
    // Feel free to add any extra logic for when a notification of a certain type is opened
    default:
      // Do nothing
  }
  return notificationTitle
}

export const isPushNotificationsPermissionEnabled = async () => {
  if (isSimulator()) {
    return true
  }
  const enabled = await firebase.messaging().hasPermission()
  return !!enabled // enabled might be boolean or number, use !! to convert to boolean
}

export const configurePushNotifications = (credentials) => {
  if (!isSimulator()) {
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          // user has permissions
          subscribeToTopics(credentials)
        } else {
          // user doesn't have permission
          firebase.messaging().requestPermission()
            .then(() => {
              // User has authorised
              this.subscribeToTopics(credentials)
            })
            .catch(error => {
              // User has rejected notification permissions
              if (__DEV__) {
                console.log('User has rejected notification permissions')
                console.log(error)
              }
            })
        }
      })
  }
}

export const getInitialNotification = async () => {
  const notificationOpen: NotificationOpen = await firebase.notifications().getInitialNotification()
  if (notificationOpen) {
    // App was opened by a notification
    const notification: Notification = notificationOpen.notification
    return notification
  } else {
    return null
  }
}

export const initNotificationListeners = (credentials, listeners) => {
  const { onNotificationDisplayed, onNotification, onNotificationOpened } = listeners
  if (!isSimulator()) {
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
      onNotificationDisplayed(notification)
    })
    this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
      onNotification(notification, getInAppNotificationTitle(credentials, notification))
    })
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
      onNotificationOpened(notificationOpen.notification)
    })
  }
}

export const initOnNotificationListener = (credentials, onNotificationListener) => {
  return firebase.notifications().onNotification((notification: Notification) => {
    onNotificationListener(notification, getInAppNotificationTitle(credentials, notification))
  })
}

export const unmountNotificationListeners = () => {
  if (!isSimulator()) {
    if (this.notificationDisplayedListener) this.notificationDisplayedListener()
    if (this.notificationListener) this.notificationListener()
    if (this.notificationOpenedListener) this.notificationOpenedListener()
  }
}
