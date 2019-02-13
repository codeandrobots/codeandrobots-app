import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  button: {
    backgroundColor: Colors.button.background,
    borderWidth: Metrics.button.border,
    borderColor: Colors.button.border,
    borderRadius: Metrics.button.radius,
    paddingVertical: Metrics.margin,
    paddingHorizontal: Metrics.marginX3,
    minWidth: Metrics.button.minWidth
  },
  text: {
    ...Fonts.style.button,
    ...Styles.text_center,
    color: Colors.button.text
  }
})
