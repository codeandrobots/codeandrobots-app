import Analytics from 'analytics-react-native'

import Config from 'react-native-config'

import { enrichProperties } from 'App/Services/Properties'

// Note: anonymousId will be regenerated in reset method
let anonymousId = Math.random()

export const Events = {
  NAVIGATED_TO: 'NAVIGATED_TO', // {userId, currentScreen, nextScreen}
  TAB_PRESSED: 'TAB_PRESSED', // {userId, tab, previousTab}
  NOTIFICATION_OPENED: 'NOTIFICATION_OPENED', // {}
  SESSION_STARTED: 'SESSION_STARTED', // {pushNotificationsEnabled, appOpenedFromPushNotification}
  SESSION_ENDED: 'SESSION_ENDED' // {duration, pushNotificationsEnabled, appOpenedFromPushNotification}
}

const newAnalytics = (segmentWriteKey) => {
  if (!segmentWriteKey) {
    return null
  }
  return new Analytics(segmentWriteKey, {
    flushAt: (__DEV__) ? 1 : 5, // The number of messages to enqueue before flushing.
    flushAfter: 5000 // The number of milliseconds to wait before flushing the queue automatically.
  })
}

export const client = newAnalytics(Config.SEGMENT_WRITE_KEY)

// Important to re-generate anonymousId so that previous anonymousId isn't associated with new user journey
export const reset = () => {
  anonymousId = Math.random()
}

export const flush = () => {
  if (!client) { return }
  client.flush()
}

export const trackUser = (data, includeAnonymousId = true) => {
  if (!client) { return }
  let { user, traits } = data
  if (!user) {
    client.identify({
      anonymousId,
      traits: enrichProperties(traits)
    })
  } else {
    const userId = user.id
    const analyticsData = { userId, traits: enrichProperties(traits) }
    if (includeAnonymousId) {
      analyticsData.anonymousId = anonymousId
    }
    client.identify(analyticsData)
  }
}

export const trackEvent = (data) => {
  if (!client) { return }
  let { user, event, properties } = data
  if (!user) {
    const analyticsData = {
      anonymousId,
      event,
      properties: enrichProperties(properties)
    }
    client.track(analyticsData)
  } else {
    const userId = user.id
    const analyticsData = {
      userId,
      event,
      properties: enrichProperties(properties)
    }
    client.track(analyticsData)
  }
}

export const trackScreen = (data) => {
  if (!client) { return }
  let { user, category, name, properties } = data
  if (!user) {
    const analyticsData = {
      anonymousId,
      category,
      name,
      properties: enrichProperties(properties)
    }
    client.screen(analyticsData)
  } else {
    const userId = user.id
    const analyticsData = {
      userId,
      category,
      name,
      properties: enrichProperties(properties)
    }
    client.screen(analyticsData)
  }
}
