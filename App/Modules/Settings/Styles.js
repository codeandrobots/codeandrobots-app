import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics, Fonts } from 'App/Themes'

export default StyleSheet.create({
  appVersionView: {
    position: 'absolute',
    bottom: Metrics.unit * 28,
    ...Styles.centered
  },
  appVersion: {
    ...Styles.text,
    fontSize: Fonts.size.medium,
    color: Colors.grey
  }
})
