import { StyleSheet } from 'react-native'

import { Styles } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  joystickView: {
    ...Styles.center,
    marginBottom: 200 // footer height
  }
})
