import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

const unit = 8

const metrics = {
  margin: unit, // 8
  marginHalf: unit / 2, // 4
  marginX2: unit * 2, // 16
  marginX3: unit * 3, // 24
  marginX4: unit * 4, // 32
  marginX5: unit * 5, // 40
  marginX6: unit * 6, // 48
  marginX7: unit * 7, // 56
  marginX8: unit * 8, // 64
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
