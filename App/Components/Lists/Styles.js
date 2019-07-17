import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  listView: {
    marginBottom: Metrics.unit
  },
  title: {
    ...Styles.text,
    marginHorizontal: Metrics.unit,
    marginBottom: Metrics.unit
  },
  linedRow: {
    ...Styles.row,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    marginHorizontal: Metrics.unit * 2
  }
})
