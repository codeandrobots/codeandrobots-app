import {YellowBox} from 'react-native'

import DebugConfig from './DebugConfig'

// Allow/disallow font-scaling in app
// Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !DebugConfig.yellowBox
}

const warningsToIgnore = [
  'Module RCTBluetoothSerial requires main queue setup since it overrides `init` but doesn\'t implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.',
  'Remote debugger is in a background tab which may cause apps to perform slowly'
]
YellowBox.ignoreWarnings(warningsToIgnore)
