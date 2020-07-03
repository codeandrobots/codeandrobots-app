### Linux Setup

If you are having difficulties setting up react-native, a Dockerfile is included to containerize the development environment.

More information can be found on the react-native-docker project's [github](https://github.com/mayhewluke/react-native-docker)

### Docker setup on a Linux host machine:

#### Prerequisites:

- [Docker](https://docs.docker.com/) has been setup and running
- There is at least 11.2GB of free space on your machine
- Make sure to run the command `xhost local:docker` to give Docker access to the host's display

**Step 1:** Git clone this repo:

```
git clone https://github.com/codeandrobots/codeandrobots-app.git
```

**Step 1.a (optional):** If the local.properties file exists (found in android/local.properties)

- Overwrite the following: `sdk.dir=/opt/android-sdk-linux`

**Step 2:** Configure the Docker environment variables (found in Docker/.env.Docker)

- `DOCKERFILE_PATH=` the absolute file path to the Dockerfile
- `PROJECT_DIRECTORY=` the absolute file path to the downloaded Code&Robots project

**Step 3:** Increasing the number of files that watchman can monitor

- Run `cat /proc/sys/fs/inotify/max_user_watches` to see if watchman can monitor all the required files. If this number is less than 520000, run the command:

  ```
  echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
  ```

#### Note for Steps 4-7

- The below steps need to be ran within the Docker/utils directory

**Step 4:** Call the build script:

```
sudo ./linux-build
```

**Step 4:** Install the required dependencies and start required applications:

```
sudo ./linux-run yarn install --ignore-engines && npm install husky --save-dev && cp ../../.env.example .env && watchman watch ./ && npm start
```

**Step 5:** Running the Android emulator

- Open a new terminal window and navigate to the Docker/utils directory
- Run for the following command:

```
sudo ./linux-run /opt/android-sdk-linux/tools/emulator -use-system-libs -avd defaultAvd`
```

**Step 7:** install and run the App

- Open a new terminal window and navigate to the Docker/utils directory
- Run the following command:

```
sudo ./linux-run react-native run-android --variant=devDebug`
```

#### Opening project post-installation:

**Step 1:** Ensure the Docker daemon is running

**Step 2:** Start required background applications

- Navigate to the ./Docker directory and run the following command:

```
sudo ./linux-run watchman watch ./ && npm start`
```

**Step 3:** Running the Android emulator

- Open a new terminal window, navigate to the ./Docker directory, and run the following:

```
sudo ./linux-run /opt/android-sdk-linux/tools/emulator -use-system-libs -avd defaultAvd`
```

**Step 4:** Install the App on your Android emulator

- Open a new terminal window, navigate to the ./Docker directory, and run the following:

```
sudo ./linux-run react-native run-android --variant=devDebug`
```

#### Remote JS Debugging

After completing the setup above, goto `localhost:8081/debugger-ui`
