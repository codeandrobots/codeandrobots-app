import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  settingView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: Metrics.unit * 2,
    paddingVertical: Metrics.unit * 2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.list.separator,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textView: {
    flex: 1
  }
})
