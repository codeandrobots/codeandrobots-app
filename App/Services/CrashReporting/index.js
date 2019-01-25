
import Config from 'react-native-config'
import { Sentry, SentrySeverity } from 'react-native-sentry'

import { enrichProperties } from 'App/Services/Properties'

export const initCrashReporting = () => {
  if (!__DEV__) {
    Sentry.config(Config.SENTRY_URL).install()
  }
}

export const captureUser = (user) => {
  if (!user) {
    return
  }
  if (!__DEV__) {
    Sentry.setUserContext({
      // email: user.email, // TODO Probably NOT a good idea to share the user's email with Sentry for security purposes
      userID: user.id,
      extra: enrichProperties()
    })
  }
}

export const resetUser = () => {
  if (!__DEV__) {
    Sentry.setUserContext({
      // email: null, // TODO See TODO in captureUser method
      userID: null,
      extra: {}
    })
  }
}

export const captureAPIError = (message, errorResponse) => {
  console.warn(message)
  console.warn(errorResponse)

  if (!__DEV__) {
    const extra = (errorResponse)
      ? { errorResponse }
      : {}
    Sentry.captureMessage(message, {
      level: SentrySeverity.Error,
      extra: enrichProperties(extra)
    })
  }
}

export const captureException = (message, e) => {
  console.error(message)
  console.error(e)

  if (!__DEV__) {
    const extra = { message }
    Sentry.captureException(e, {
      extra: enrichProperties(extra)
    })
  }
}
