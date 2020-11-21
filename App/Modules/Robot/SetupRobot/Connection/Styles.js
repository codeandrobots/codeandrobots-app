import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  view: {
    ...Styles.centered,
    marginVertical: Metrics.unit * 2
  },
  text: {
    ...Styles.text,
    ...Styles.text_center,
    color: Colors.grey
  }
})
