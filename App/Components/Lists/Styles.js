import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  listView: {
    margin: Metrics.unit
  },
  title: {
    ...Styles.text,
    marginHorizontal: Metrics.unit,
    marginBottom: Metrics.unit
  }
})
