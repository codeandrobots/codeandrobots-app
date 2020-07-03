### Windows Setup

If you are having difficulties setting up react-native, a Dockerfile is included to containerize the development environment.

More information can be found on the react-native-docker project's [github](https://github.com/mayhewluke/react-native-docker)

### Docker setup on a Linux host machine:

#### Prerequisites:

- [Docker](https://docs.docker.com/) has been setup and running
- There is at least 11.2GB of free space on your machine
- Windows 10 Pro Installed

**Step 1:** Git clone this repo:

```
git clone https://github.com/codeandrobots/codeandrobots-app.git
```

**Step 1.a (optional):** If the local.properties file exists (found in android/local.properties)

- Overwrite the following: `sdk.dir=/opt/android-sdk-linux`

**Step 2:** Replace temporary values found in the build script (found in Docker/windows-run.bat)

- `PROJECT_PATH=` the absolute file path to the project

#### Note for Steps 3-7

- The below steps need to be ran within the ./Docker directory

**Step 3:** Call the build script from the CMD:

```
./windows-build
```

**Step 4:** Install the required dependencies and start required applications:

```
./windows-run yarn install --ignore-engines && npm install husky --save-dev && cp ../../.env.example .env && watchman watch ./ && npm start
```

**Step 5:** Running the Android emulator

- Open a new CMD window and navigate to the ./Docker directory
- Run for the following command:

```
./windows-run /opt/android-sdk-linux/tools/emulator -use-system-libs -avd defaultAvd`
```

**Step 7:** install and run the App

- Open a new CMD window and navigate to the ./Docker directory
- Run the following command:

```
./windows-run react-native run-android --variant=devDebug`
```

#### Opening project post-installation:

**Step 1:** Ensure Docker is running

**Step 2:** Start required background applications

- Navigate to the ./Docker directory and run the following command in a CMD window:

```
./windows-run watchman watch ./ && npm start`
```

**Step 3:** Running the Android emulator

- Open a new CMD window, navigate to the ./Docker directory, and run the following:

```
./windows-run /opt/android-sdk-linux/tools/emulator -use-system-libs -avd defaultAvd`
```

**Step 4:** Install the App on your Android emulator

- Open a new CMD window, navigate to the ./Docker directory, and run the following:

```
./windows-run react-native run-android --variant=devDebug
```

#### Remote JS Debugging

After completing the setup above, goto `localhost:8081/debugger-ui`

#### Connecting sound to the container

Please reference [this guide](https://qiita.com/speaktech/items/c0c14b3dd3fc2531f64d) for more information as it is an involved process
