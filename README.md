# Code & Robots
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## Open Source

Code & Robots is completly FREE under the [MIT license](https://github.com/codeandrobots/codeandrobots/blob/master/LICENSE). You can even use it commercially and we welcome all contributions, see our [contributing guide](CONTRIBUTING.md) to get started.

## :rocket: How to setup and run the app

If you're new to mobile app development with React Native then here are some crash courses to bring you up to speed:
  * [React Native crash course video](https://www.youtube.com/watch?v=mkualZPRZCs)
  * [JavaScript OOP Crash Course (ES5 & ES6)](https://www.youtube.com/watch?v=vDJpGenyHaA)

**Step 1:** Install and setup React Native
  * Mac or Linux
    * See [React Native getting started doc](https://facebook.github.io/react-native/docs/getting-started)
  * Windows
    * See [Windows Setup doc](https://github.com/codeandrobots/codeandrobots-app/blob/master/SETUP_WINDOWS.md)

**Step 2:** git clone this repo
  * Mac or Linux
    * ```cd ~```
    * ```git clone https://github.com/codeandrobots/codeandrobots-app.git```
  * Windows
    * ```cd C:\Users\%username%```
    * ```git clone https://github.com/codeandrobots/codeandrobots-app.git```

**Step 3:** cd to the cloned repo
  * ```cd codeandrobots-app```

**Step 4:** Install the Application with Yarn
  * ```yarn install --ignore-engines```

**Step 5:** Copy `.env.example` to `.env`
  * Mac or Linux
    * ```cp .env.example .env```
  * Windows
    * ```copy .env.example .env```

**Step 6:** Update [App Properties](#app-properties) in ```.env``` if necessary

**Step 7:** Install and run the app
  * iOS
    * Make sure [XCode](https://developer.apple.com/xcode/) is installed
    * run `react-native run-ios`
  * Android
    * [Use your Android device](https://facebook.github.io/react-native/docs/running-on-device) or run on an [Android Emulator](https://medium.com/@Charles_Stover/create-a-react-native-app-on-an-android-emulator-1c0d94f288ae) or run on [Genymotion](https://www.genymotion.com)
    * run `react-native run-android --variant=devDebug`

## [Troubleshooting](TROUBLESHOOTING.md)
