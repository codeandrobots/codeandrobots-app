import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  itemView: {
    flexDirection: 'row',
    margin: Metrics.unit,
    padding: Metrics.unit,
    borderRadius: Metrics.unit,
    backgroundColor: Colors.primary
  },
  itemView_square: {
    flexDirection: 'column',
    width: (Metrics.screenWidth / 2) - Metrics.unit
  },
  itemView_disabled: {
    backgroundColor: Colors.background_disabled
  },
  imageView: {
    marginHorizontal: Metrics.unit,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageView_square: {
    margin: Metrics.unit
  },
  image: {
    maxWidth: 55,
    maxHeight: 55
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: Metrics.unit
  },
  textView_square: {
    flex: 0,
    alignItems: 'center'
  },
  buttonView: {
    justifyContent: 'center',
    margin: Metrics.unit
  },
  buttonView_square: {
    alignItems: 'center'
  }
})
