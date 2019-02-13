import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  imageView: {
    ...Styles.centered,
    marginVertical: Metrics.marginX2
  },
  titleView: {
    ...Styles.centered,
    marginTop: Metrics.marginX3
  },
  textView: {
    ...Styles.centered,
    marginTop: Metrics.margin,
    marginBottom: Metrics.marginX3
  },
  title: {
    ...Styles.text
  },
  text: {
    ...Styles.text,
    ...Styles.text_center,
    marginHorizontal: Metrics.marginX2
  }
})
