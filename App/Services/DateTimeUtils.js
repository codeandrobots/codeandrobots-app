
import { Platform, NativeModules } from 'react-native'

import moment from 'moment/min/moment-with-locales'

export const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']

const getDeviceLocale = () => {
  return (Platform.OS === 'ios')
    ? NativeModules.SettingsManager.settings.AppleLocale.replace('_', '-') // "fr-FR"
    : NativeModules.I18nManager.localeIdentifier.replace('_', '-') // "fr-FR"
}

/**
 * See https://github.com/moment/moment/issues/3624#issuecomment-403312925
 *
 * Checks if the device locale is available in moment and returns the locale to be loaded
 */
export const getMomentLocale = () => {
  let locale = getDeviceLocale()

  // make the locale lower case will fix crashes caused by "en-GB" (instead of "en-gb") not being found
  locale = locale.toLowerCase()

  // check if the locale is included in the array returned by `locales()` which (in this case) tells us which locales moment will support
  if (moment.locales().includes(locale)) {
    return locale
  } else if (moment.locales().includes(locale.substring(0, 2))) {
    // check if the first two letters of the locale are included in the array returned by `locales()` which (in this case) tells us which locales moment will support
    // will fixes crashes caused by "en-US" not being found, as we'll tell moment to load "en" instead
    return locale.substring(0, 2)
  }

  // use "en-gb" (the default language and locale for my app) as a fallback if we can't find any other locale
  return 'en-gb'
}

export const toTimeAMPM = (dateUTC) => {
  const d = (typeof dateUTC === 'string')
    ? new Date(Date.parse(dateUTC))
    : dateUTC

  const dateTime = {}
  dateTime.hours = d.getHours()
  dateTime.mins = d.getMinutes()

  // See https://stackoverflow.com/a/8888498
  const ampm = dateTime.hours >= 12 ? 'PM' : 'AM'
  dateTime.hours = dateTime.hours % 12
  dateTime.hours = dateTime.hours ? dateTime.hours : 12 // the hour '0' should be '12'
  dateTime.mins = dateTime.mins < 10 ? '0' + dateTime.mins : dateTime.mins

  // 4:22 PM
  return dateTime.hours + ':' + dateTime.mins + ' ' + ampm
}
