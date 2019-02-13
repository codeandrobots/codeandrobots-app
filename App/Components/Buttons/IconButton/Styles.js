import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  button: {
    width: 116,
    height: 116,
    marginHorizontal: 16
  },
  button_small: {
    width: 66,
    height: 66
  },
  buttonOutter: {
    position: 'absolute',
    paddingTop: 8,
    paddingLeft: 8,
    width: 116,
    height: 116,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: Metrics.button.radius
  },
  buttonInner: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: Metrics.button.radius,
    backgroundColor: Colors.button.background
  },
  buttonOutter_small: {
    width: 66,
    height: 66
  },
  buttonInner_small: {
    position: 'relative',
    width: 50,
    height: 50
  },
  buttonIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
