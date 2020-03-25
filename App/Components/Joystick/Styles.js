import { StyleSheet } from 'react-native'

import { Styles, Colors } from 'App/Themes'

const styles = StyleSheet.create({
  ...Styles,
  thumbstickView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 160,
    height: 160,
    zIndex: 9999
  },
  thumbstickShadow: {
    position: 'absolute',
    top: 50,
    left: 50,
    backgroundColor: Colors.primaryTranslucent,
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 9998
  },
  thumbstick: {
    backgroundColor: Colors.primary,
    width: 60,
    height: 60
  },
  thumbstickBackground: {
    backgroundColor: Colors.transparent,
    borderWidth: 0
  }
})

export default StyleSheet.create(styles)

export const stylesLightAndSmall = StyleSheet.create({
  ...styles,
  thumbstickView: {
    ...styles.thumbstickView,
    width: 120,
    height: 120
  },
  thumbstickShadow: {
    ...styles.thumbstickShadow,
    top: 40,
    left: 40,
    width: 40,
    height: 40
  },
  thumbstick: {
    ...styles.thumbstick,
    backgroundColor: Colors.white,
    width: 40,
    height: 40
  }
})
