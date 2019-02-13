import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  button: {
    backgroundColor: Colors.button.background,
    borderWidth: Metrics.button.border,
    borderColor: Colors.button.border,
    borderRadius: Metrics.button.radius,
    paddingVertical: Metrics.unit,
    paddingHorizontal: Metrics.unit * 3,
    minWidth: Metrics.button.minWidth
  },
  text: {
    ...Fonts.style.button,
    ...Styles.text_center,
    color: Colors.button.text
  }
})
