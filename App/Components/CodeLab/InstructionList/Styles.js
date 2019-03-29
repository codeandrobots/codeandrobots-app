import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1
  },
  contentContainer: {
    width: Metrics.screenWidth
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
