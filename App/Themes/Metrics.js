import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  baseMargin: 8,
  baseMarginHalf: 4,
  baseMarginX2: 16,
  baseMarginX3: 24,
  baseMarginX4: 32,
  baseMarginX5: 40,
  baseMarginX6: 48,
  baseMarginX7: 56,
  baseMarginX8: 64,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54
}

export default metrics
