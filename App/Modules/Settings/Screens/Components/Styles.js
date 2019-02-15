import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics, Fonts } from 'App/Themes'

export default StyleSheet.create({
  appVersionView: {
    position: 'absolute',
    top: Metrics.unit * -6,
    ...Styles.centered,
    backgroundColor: 'transparent'
  },
  appVersion: {
    ...Styles.text,
    fontSize: Fonts.size.medium,
    color: Colors.grey
  }
})
