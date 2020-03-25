import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  navView: {
    width: 152,
    height: '100%',
    backgroundColor: Colors.primary
  },
  leftNavView: {
    borderTopRightRadius: Metrics.unit * 2,
    borderBottomRightRadius: Metrics.unit * 2
  },
  rightNavView: {
    borderTopLeftRadius: Metrics.unit * 2,
    borderBottomLeftRadius: Metrics.unit * 2
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navTitle: {
    flex: 1,
    ...Styles.text,
    color: Colors.white,
    margin: Metrics.unit
  }
})
