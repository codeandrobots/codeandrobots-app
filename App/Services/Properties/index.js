import { Platform, Dimensions } from 'react-native'
import VersionNumber from 'react-native-version-number'
import DeviceInfo from 'react-native-device-info'
import Config from 'react-native-config'

export const appVersion = () => (VersionNumber.appVersion != null) ? VersionNumber.appVersion : 'N/A'

export const appBuild = () => (VersionNumber.buildVersion != null) ? VersionNumber.buildVersion : 'N/A'

export const manufacturer = () => DeviceInfo.getManufacturer()

export const model = () => DeviceInfo.getModel()

export const OS = () => DeviceInfo.getSystemName()

export const OSVersion = () => DeviceInfo.getSystemVersion()

export const country = () => DeviceInfo.getDeviceCountry()

export const appInfo = () => `${appVersion()} (${appBuild()})`

export const deviceInfo = () => `${manufacturer()} ${OS()} ${model()} ${OSVersion()}`

export const isSimulator = () => DeviceInfo.isEmulator()

// Based on https://github.com/ptelad/react-native-iphone-x-helper
export const isIphoneX = () => {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
  )
}

export const isIOS12OrHigher = () => {
  if (Platform.OS !== 'ios') {
    return false
  }
  const majorVersionIOS = parseInt(Platform.Version, 10)
  return (majorVersionIOS >= 12)
}

export const enrichProperties = (properties) => {
  if (!properties) {
    properties = {}
  }
  return {
    ...properties,
    appEnv: Config.ENV,
    appVersion: appVersion(),
    appBuild: appBuild(),
    manufacturer: manufacturer(),
    model: model(),
    os: OS(),
    osVersion: OSVersion()
  }
}
