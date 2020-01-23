# Can't use alpine since it can't run 32-bit binaries, and the SDK doesn't have
# 64-bit binaries
FROM ubuntu:18.04

# ——————————
# Installs base software packages
# ——————————

ENV LANG en_US.UTF-8

RUN apt-get update && \
    apt-get install -y apt-utils \
    software-properties-common 

RUN add-apt-repository main && \
    add-apt-repository universe && \
    add-apt-repository restricted && \
    add-apt-repository multiverse

RUN apt-get update && \
    apt-get install -y wget \
    openjdk-8-jdk-headless \
    wget \
    curl \
    git \
    unzip \
    git \
    libssl-dev \
    autoconf \
    automake \
    libtool \
    python-dev \
    ca-certificates \
    libpulse0 \
    libgl1-mesa-dev \
    libxcomposite1 \
    libxcursor1 \
    libasound2 \
    libqt5dbus5 \
    libqt5widgets5 \
    libqt5network5 \
    libqt5gui5 \
    libqt5core5a \
    libdouble-conversion1 \
    libxcb-xinerama0 \
    pulseaudio \
    pkg-config && \
    apt-get clean

ENV JAVA8_HOME /usr/lib/jvm/java-8-openjdk-amd64
ENV JAVA_HOME $JAVA8_HOME

# ——————————
# Configure SDK Tools
# ——————————

## SDK tools
ENV ANDROID_HOME /opt/android-sdk-linux
ENV DOCKERIZE_HOME /opt/dockerize
ARG VERSION_SDK_TOOLS=4333796
ENV ANDROID_SDK_ZIP http://dl.google.com/android/repository/sdk-tools-linux-$VERSION_SDK_TOOLS.zip

RUN mkdir -p $ANDROID_HOME \
&& curl -L $ANDROID_SDK_ZIP --output sdk.zip \
&& unzip sdk.zip -d $ANDROID_HOME \
&& rm sdk.zip

# ——————————
# Configure Dockerize
# ——————————

ENV DOCKERIZE_VERSION v0.6.1
RUN mkdir -p $DOCKERIZE_HOME \
&& wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
&& tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
&& rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# ——————————
# Download Required Andriod tools
# ——————————

ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
ARG ANDRIOD_VERSION
ARG BUILD_TOOLS_VERSION
ARG ANRIOD_SYSTEM_ARCH

## SDK
### sdkmanager will throw up warnings if this file does not exist
RUN mkdir -p /root/.android && touch /root/.android/repositories.cfg
### downloading required tools
RUN yes | sdkmanager --verbose 'platform-tools'
RUN yes | sdkmanager --verbose 'emulator'
RUN yes | sdkmanager --verbose 'build-tools;'${BUILD_TOOLS_VERSION}
RUN yes | sdkmanager --verbose 'platforms;'${ANDRIOD_VERSION}
RUN yes | sdkmanager --verbose 'tools'
RUN yes | sdkmanager --verbose 'system-images;'${ANDRIOD_VERSION}';default;'${ANRIOD_SYSTEM_ARCH}
RUN yes | sdkmanager --update --verbose
RUN yes | sdkmanager --licenses

# ——————————
# Install Node
# ——————————

ENV NODE_VERSION 10.13.0
RUN cd && \
    wget -q http://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz && \
    tar -xzf node-v${NODE_VERSION}-linux-x64.tar.gz && \
    mv node-v${NODE_VERSION}-linux-x64 /opt/node && \
    rm node-v${NODE_VERSION}-linux-x64.tar.gz
ENV PATH ${PATH}:/opt/node/bin

# ——————————
# Install React-Native package
# ——————————

RUN npm install --global react-native-cli
RUN npm install --global yarn
RUN ln -s /opt/node/lib/node_modules/yarn/bin/yarn.js /usr/local/bin/yarn
RUN ln -s /opt/node/lib/node_modules/yarn/bin/yarn.js /usr/local/bin/yarnpkg

# ——————————
# Install Watchman
# ——————————

# Number of jobs that will be excuted in parallel by make
ARG NUM_JOBS=2
# Downloading and compiling watchman from source
RUN git clone https://github.com/facebook/watchman.git \
    && cd watchman \
    && git checkout v4.9.0 \
    && ./autogen.sh \
    && ./configure \
    && make -j${NUM_JOBS}\
    && make install \
    && cd .. \
    && rm -rf watchman

# ——————————
# Adding user
# ——————————

# Set up non-root user
ARG USERNAME=dev
ARG UID=1000
RUN adduser --uid $UID --disabled-password --gecos '' $USERNAME

# Non-root user local andriod/avd directory (required for virtual devices to be created)
RUN mkdir /home/dev/.andriod
RUN mkdir /home/dev/.andriod/avd
RUN cp /root/.android/repositories.cfg /home/dev/.andriod

# Giving non-root user permissions to anrdiod sdk commands
RUN chown -R $USERNAME:$USERNAME $ANDROID_HOME
RUN chown -R $USERNAME:$USERNAME /home/dev/.andriod

# Allow the Docker user to play audio through the host's pulseaudio
ENV XDG_RUNTIME_DIR /run/user/$UID
RUN mkdir -p $XDG_RUNTIME_DIR && chown -R $USERNAME:$USERNAME $XDG_RUNTIME_DIR

USER $USERNAME

ENV PROJECT_MOUNT=/project
WORKDIR $PROJECT_MOUNT 

# Creating default virtual device according to arguments
ARG DEFAULT_DEVICE_NAME
RUN avdmanager create avd --name defaultAvd --package 'system-images;'$ANDRIOD_VERSION';default;'$ANRIOD_SYSTEM_ARCH --device "$DEFAULT_DEVICE_NAME" && echo && echo "hw.keyboard=yes" >> ~/.android/avd/defaultAvd.avd/config.ini

# Tell gradle to store dependencies in a sub directory of the android project -
# this persists the dependencies between builds, speeding up build times. Make
# sure to add android/gradle_deps to the project's .gitignore
ENV GRADLE_USER_HOME $PROJECT_MOUNT/android/gradle_deps