import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  footer: {
    ...Styles.footer,
    paddingTop: 0,
    paddingBottom: Metrics.unit * 4
  },
  top: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 58,
    backgroundColor: Colors.background
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    height: 116,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
