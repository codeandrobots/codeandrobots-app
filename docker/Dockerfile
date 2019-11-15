# Can't use alpine since it can't run 32-bit binaries, and the SDK doesn't have
# 64-bit binaries
FROM ubuntu:18.04

RUN apt-get update && apt-get install -y wget

# Install Android SDK
## Dependencies
RUN apt-get install -y unzip curl ca-certificates \
  openjdk-8-jdk
ENV JAVA8_HOME /usr/lib/jvm/java-8-openjdk-amd64
ENV JAVA_HOME $JAVA8_HOME
## SDK tools
ENV ANDROID_HOME /opt/android-sdk-linux
ENV DOCKERIZE_HOME /opt/dockerize
ARG VERSION_SDK_TOOLS=4333796
ENV ANDROID_SDK_ZIP http://dl.google.com/android/repository/sdk-tools-linux-$VERSION_SDK_TOOLS.zip

RUN mkdir -p $ANDROID_HOME \
&& curl -L $ANDROID_SDK_ZIP --output sdk.zip \
&& unzip sdk.zip -d $ANDROID_HOME \
&& rm sdk.zip

ENV DOCKERIZE_VERSION v0.6.1
RUN mkdir -p $DOCKERIZE_HOME \
&& wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
&& tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
&& rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
## SDK
### sdkmanager will throw up warnings if this file does not exist
RUN mkdir -p /root/.android && touch /root/.android/repositories.cfg
### Use verbose flags to keep an eye on progress - some commands take a very long
### time, and without the verbose flag it's impossible to tell if it's hung or
### still working
RUN yes | sdkmanager --verbose 'platform-tools'
RUN yes | sdkmanager --update --verbose
RUN yes | sdkmanager --licenses
# Done installing Android SDK

# Set up React Native
## Install node, yarn, and react-native-cli
RUN apt-get update 
RUN apt-get install -y nodejs npm \
&& npm install -g yarn \
&& yarn global add react-native-cli

### This is the port that the React Native app will use to communicate with the
### build server for loading new builds, and also where the debugger page will
### be hosted (ie. localhost:8081/debugger-ui)
# EXPOSE 8081
## Install watchman - required for React Native to build native code, and for
## hot code reloading
RUN apt-get install -y git libssl-dev autoconf automake libtool python-dev \
  pkg-config
RUN git clone https://github.com/facebook/watchman.git \
&& cd watchman \
&& git checkout v4.9.0 \
&& ./autogen.sh \
&& ./configure \
&& make -j4\
&& make install \
&& cd .. \
&& rm -rf watchman
# Done setting up react-native

# Install and set up Tini
ARG TINI_VERSION=v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]
# Done installing Tini

# Set up non-root user
ARG USERNAME=dev
ARG UID=1000
RUN adduser --uid $UID --disabled-password --gecos '' $USERNAME
## Give the user ownership of the SDK installation directory (so it can run
## SDK commands)
RUN chown -R $USERNAME:$USERNAME $ANDROID_HOME
RUN chown -R $USERNAME:$USERNAME $DOCKERIZE_HOME
# Allow the Docker user to play audio through the host's pulseaudio
ENV XDG_RUNTIME_DIR /run/user/$UID
RUN mkdir -p $XDG_RUNTIME_DIR && chown -R $USERNAME:$USERNAME $XDG_RUNTIME_DIR

USER $USERNAME

ENV PROJECT_MOUNT=/project
WORKDIR $PROJECT_MOUNT 

# Tell gradle to store dependencies in a sub directory of the android project -
# this persists the dependencies between builds, speeding up build times. Make
# sure to add android/gradle_deps to the project's .gitignore
ENV GRADLE_USER_HOME $PROJECT_MOUNT/android/gradle_deps
