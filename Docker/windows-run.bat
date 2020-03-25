
docker run --rm -it --privileged -v "PROJECT_PATH" --network host -e DISPLAY=host.docker.internal:0 react-native %*

pause