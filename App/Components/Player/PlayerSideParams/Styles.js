import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'
import { isIphoneX } from 'App/Services/Properties'

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
  },
  navIcon: {
    marginTop: Metrics.unit / 2
  },
  navSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.primaryTranslucent
  },
  navParams: {
    marginLeft: Metrics.unit
  },
  navParams_left: {
    marginLeft: (isIphoneX()) ? Metrics.unit * 5 : Metrics.unit
  },
  navParam: {
    ...Styles.text,
    color: Colors.primaryTranslucent,
    marginVertical: Metrics.unit
  },
  navParam_active: {
    color: Colors.white
  }
})
