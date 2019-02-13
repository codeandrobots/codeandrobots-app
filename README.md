# Code & Robots
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## :arrow_up: How to Setup

**Step 1:** git clone this repo

**Step 2:** cd to the cloned repo

**Step 3:** Install the Application with `yarn install`

## :arrow_forward: How to Run App

1. cd to the repo
2. Copy `.env.example` to `.env`
3. Update [App Properties](#app-properties) if necessary
4. Run Build
  * for iOS
    * Make sure [XCode](https://developer.apple.com/xcode/) is installed
    * run `react-native run-ios`
  * for Android
    * Run [Genymotion](https://www.genymotion.com) or run on [an Android device](https://facebook.github.io/react-native/docs/running-on-device)
    * run `react-native run-android`

### App Properties

When running the app locally, it will rely on the properties defined in your local `.env` file.

Have a look at [.env.example](https://github.com/codeandrobots/codeandrobots-kit/blob/master/app/.env.example) for more information about app properties.

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
