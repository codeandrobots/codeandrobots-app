import { NavigationActions } from 'react-navigation'

import { Events, trackEvent, trackScreen } from 'App/Services/Analytics'

// gets the current screen from navigation state
const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

const screenTracking = ({ getState }) => next => (action) => {
  if (
    action.type !== NavigationActions.NAVIGATE &&
    action.type !== NavigationActions.BACK &&
    action.type !== 'STARTUP'
  ) {
    return next(action)
  }

  const credentials = getState().credentials
  const user = (credentials) ? credentials.user : undefined

  const currentScreen = getCurrentRouteName(getState().nav)

  if (action.type === 'STARTUP') {
    trackScreen({user, name: currentScreen})
    return next(action)
  }

  const result = next(action)
  const nextScreen = getCurrentRouteName(getState().nav)

  if (nextScreen !== currentScreen) {
    try {
      trackScreen({user, name: nextScreen})
      trackEvent({user, event: Events.NAVIGATED_TO, properties: {currentScreen, nextScreen}})
    } catch (e) {
      console.warn(e)
    }
  }
  return result
}

export default screenTracking
