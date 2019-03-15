import { StyleSheet } from 'react-native'

import { Styles, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  thumbstick: {
    position: 'absolute',
    top: 50,
    left: 50,
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30
  }
})
