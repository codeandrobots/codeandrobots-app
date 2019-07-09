### Troubleshooting - General

#### Activity class {com.codeandrobots/com.codeandrobots.MainActivity} does not exist

If you see the error "Activity class {com.codeandrobots/com.codeandrobots.MainActivity} does not exist" then all is OK but you have to find and launch the Code & Robots app manually from your device. This error occurs because react-native CLI doesn't work well yet with Android variants.

#### Device is UNAUTHORIZED

If you see the error "Device is UNAUTHORIZED", make sure to click OK when the popup "Allow USB debugging" shows on your device.

To check to see if your device is connected and authorized:
  * ```adb devices```

#### Failed to create directory

If you see the error "Failed to create directory" then keep running ```react-native run-android --variant=devDebug``` until they stop happening, sometimes as much as 3 or 4 times :confounded:

#### Operation not permitted, lstat

If you see the error "Operation not permitted, lstat" then try the following:

1. Start the React Native bundler inside a **NEW** terminal or command prompt
  * ```cd codeandrobots-app```
  * ```npm cache clean```
  * ```npm start -- --reset-cache```

2. Run the app in a different terminal or command prompt, see **Step 7** above

#### Could not dispatch a message to the daemon

If you see the error "Could not dispatch a message to the daemon" then run ```adb devices``` and make sure that the daemon is running or starts successfully and also that your attached device is listed.

### yarn-install error: Command failed: .../node_modules/detox/scripts/build_framework.ios.sh

Detox is causing post-install issues and has been removed from the project.

If you are running an older version and must remove Detox manually:

 1. In package.json, remove all mentions of `detox`:
  - Remove ```test-e2e``` script
  - Remove detox as a devDependency.
  - Remove detox configuration listing
 2. Rerun installation step 4: ```yarn install --ignore-engines```

### Could not find iPhone [VERSION] simulator

 React Native is unable to locate the requested simulator to run the app.

 1. Navigate to node-modules/react-native/local-cli/runIOS/findMatchingSimulator.js
 2. Change ```if (version.indexOf('iOS') !== 0)``` to ```if (!version.includes('iOS'))```

### glog Configuration issues

glog logging module didn't install correctly.

Copy the [glog-0.3.4](https://github.com/codeandrobots/codeandrobots-app/files/3320286/glog-0.3.4.zip) directory into ...node_modules/react-native/third-party

### Troubleshooting - Windows

#### Failed to create directory

If you see the error "Failed to create directory" then keep running ```react-native run-android --variant=devDebug``` until they stop happening, sometimes as much as 3 or 4 times :/

#### Activity class {com.codeandrobots/com.codeandrobots.MainActivity} does not exist

If you see the error "Activity class {com.codeandrobots/com.codeandrobots.MainActivity} does not exist" then all is OK but you have to launch the Code & Robots app manually from your device. This error occurs because react-native CLI doesn't work well yet with Android variants.

#### Operation not permitted, lstat

If you see the error "Operation not permitted, lstat" then try the following:

1. Start the React Native bundler inside a **NEW** terminal or command prompt
  * ```cd codeandrobots-app```
  * ```npm cache clean```
  * ```npm start -- --reset-cache```

2. Run the app in a different terminal or command prompt
  * ```react-native run-android --variant=devDebug```
  
#### Could not dispatch a message to the daemon

If you see the error "Could not dispatch a message to the daemon" then run ```adb devices``` and make sure that the daemon is running or starts successfully and also that your attached device is listed.
