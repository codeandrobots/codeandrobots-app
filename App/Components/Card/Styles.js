import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  imageView: {
    ...Styles.centered,
    marginVertical: Metrics.unit * 2
  },
  titleView: {
    ...Styles.centered,
    marginTop: Metrics.unit * 3
  },
  textView: {
    ...Styles.centered,
    marginTop: Metrics.unit,
    marginBottom: Metrics.unit * 3
  },
  title: {
    ...Styles.text
  },
  text: {
    ...Styles.text,
    ...Styles.text_center,
    marginHorizontal: Metrics.unit * 2
  }
})
