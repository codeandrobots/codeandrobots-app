import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

import { isIphoneX } from 'App/Services/Properties'

export default StyleSheet.create({
  ...Styles,
  view: {
    backgroundColor: Colors.white
  },
  footer: {
    minHeight: 80,
    backgroundColor: Colors.footer.background,
    paddingTop: Metrics.unit * 4,
    paddingBottom: (isIphoneX()) ? Metrics.unit * 5 : Metrics.unit * 4,
    paddingHorizontal: Metrics.unit
  }
})
