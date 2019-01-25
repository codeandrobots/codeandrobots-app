import phoneLib from 'google-libphonenumber'

// Removes leading zero from phoneNumber if present
// Removes any spaces from phoneNumber
// Removes any dashes from phoneNumber
// Returns +{callingCode}{phoneNumber}
export const sanitizePhoneNumber = (callingCode, phoneNumber) => {
  return (callingCode && phoneNumber)
    ? '+' + callingCode + phoneNumber.replace(/^0/, '').replace(/\s/g, '').replace(/-/g, '')
    : null
}

export const parsePhoneNumber = (number) => {
  if (!number) {
    return null
  }

  const originalNumber = number // unchanged

  let countryCode = null

  // Convert 00 to + otherwise libphonenumber library will not be able to parse the number
  if (number.startsWith('00')) {
    number = '+' + number.substring(2)
  }

  // Try to parse number using libphonenumber library
  try {
    const phoneUtil = phoneLib.PhoneNumberUtil.getInstance()
    const parsedPhoneNumber = phoneUtil.parseAndKeepRawInput(number, '')
    const nationalPhoneNumber = parsedPhoneNumber.getNationalNumber()
    if (nationalPhoneNumber != null) {
      number = '' + nationalPhoneNumber
      countryCode = '' + parsedPhoneNumber.getCountryCode()
    }
  } catch (err) {
    // Number can't be parsed, e.g. there is no country code, so use number as given
  }

  // Remove everything except numbers
  number = number.replace(/[^0-9]/g, '')

  // Remove leading zero if present
  if (number.startsWith('0')) {
    number = number.substring(1)
  }

  return {
    originalNumber,
    number,
    countryCode
  }
}
