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
  itemView_compact: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
    marginRight: Metrics.unit * 2,
    paddingVertical: Metrics.unit * 2,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderBottomColor: Colors.list.separator,
    backgroundColor: Colors.transparent
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
  imageView_compact: {
    marginRight: Metrics.unit
  },
  image: {
    maxWidth: 55,
    maxHeight: 55
  },
  image_compact: {
    maxWidth: 20,
    maxHeight: 20
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
  textView_compact: {
    margin: 0
  },
  buttonView: {
    justifyContent: 'center',
    margin: Metrics.unit
  },
  buttonView_square: {
    alignItems: 'center'
  },
  buttonView_compact: {
    margin: 0,
    marginLeft: Metrics.unit
  }
})
