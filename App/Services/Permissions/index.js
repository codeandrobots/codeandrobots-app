import { PermissionsAndroid } from 'react-native'

export const getLocationAndroidPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location permission is required for WiFi connections',
      message:
        'This app needs location permission as this is required ' +
        'to scan for wifi networks.',
      buttonNegative: 'DENY',
      buttonPositive: 'ALLOW'
    }
  )
  const locationPermissionGranted = granted === PermissionsAndroid.RESULTS.GRANTED

  if (!locationPermissionGranted) {
    console.log(`Location Android permission NOT granted - ${granted}`)
  }
  return locationPermissionGranted
}
