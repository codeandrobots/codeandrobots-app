import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  skills: {
    marginVertical: Metrics.unit
  },
  buttons: {
    ...Styles.row,
    justifyContent: 'center',
    marginVertical: Metrics.unit
  },
  buttons_small: {
    marginVertical: Metrics.unit / 2
  },
  playerButton: {
    marginHorizontal: Metrics.unit / 2
  }
})
