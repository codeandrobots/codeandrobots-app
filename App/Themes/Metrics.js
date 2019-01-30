import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  margin: 8,
  marginHalf: 4,
  marginX2: 16,
  marginX3: 24,
  marginX4: 32,
  marginX5: 40,
  marginX6: 48,
  marginX7: 56,
  marginX8: 64,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  button: {
    radius: 100,
    minWidth: 112,
    border: 8
  }
}

export default metrics
