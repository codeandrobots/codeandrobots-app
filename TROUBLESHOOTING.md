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

### App Properties

When running the app locally, it will rely on the properties defined in your local `.env` file.

Have a look at [.env.example](https://github.com/codeandrobots/codeandrobots-kit/blob/master/app/.env.example) for more information about app properties.

### yarn-install error: Command failed: .../node_modules/detox/scripts/build_framework.ios.sh

Detox is causing post-install issues and must be removed from the project.

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

### Running on a real device

Have a look at https://facebook.github.io/react-native/docs/running-on-device to get your device setup.

When running an API **locally** and the app on a real device, you will need to find and use the primary IP address of your local machine (i.e. **not** localhost).
1. `ipconfig getifaddr en0` (only works on macOS)
2. Serve your backend API using the primary IP address (e.g. `rails s -b [primary local ip]`)
3. Update **API_BASE_URL** to use the primary IP address (e.g. `http://[primary local ip]:3000/api/v1/`)

## :no_entry_sign: Standard Compliant

This project adheres to [Standard](https://github.com/standard/standard).

**Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

### Testing

Before running tests you will need to install Jest.

Unit and integration tests automatically run on every ```git commit``` and ```git push```.

Unit and integration tests:
```
yarn test
```

#### View app stories in Storybook mode

1. Run the app packager `npm start`
2. Run the app, e.g. `react-native run-ios`
3. Wait for the app to start then **stop** the app packager from running
4. Run the storybook `yarn storybook`
5. Reload the app, e.g. `Cmd-R` in the iOS simulator, choose app stories from the Storybook menu

#### End to End Testing

There are no end to end tests right now as the app development is in flux but it's a good idea to add them in the future. [Detox](https://github.com/wix/detox) is a good end to end testing tool and the project has already been setup to work with it.

##### Detox

[Detox](https://github.com/wix/detox) is a brand new end-to-end test and automation library for React Native.

Follow the official [Detox documentation](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md) (Step 1 and Step 2) on getting started but **skip** Step 3 as it's tightly coupled to Mocha.

* Install Node 7.6.0 or above for native async-await support needed for Detox
```
brew update && brew install node
```
* Install appleSimUtils
```
brew tap wix/brew
brew install --HEAD applesimutils
```
* Intall Detox CLI
```
npm install -g detox-cli
```


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