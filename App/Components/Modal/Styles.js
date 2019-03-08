import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
    borderRadius: 6,
    marginHorizontal: Metrics.unit * 4,
    padding: Metrics.unit * 4
  },
  close: {
    position: 'absolute',
    right: 0,
    margin: Metrics.unit * 2,
    zIndex: 9999
  }
})
