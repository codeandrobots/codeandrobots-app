import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  page: {
    height: '100%',
    marginHorizontal: Metrics.unit
  },
  footer: {
    ...Styles.footer,
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'center'
  },
  controls: {
    ...Styles.row,
    marginHorizontal: Metrics.unit * 4
  },
  bubble: {
    width: Metrics.unit,
    height: Metrics.unit,
    backgroundColor: Colors.carousel.bubble,
    borderRadius: Metrics.unit * 2,
    alignSelf: 'center',
    marginHorizontal: Metrics.unit / 2
  },
  bubble_active: {
    backgroundColor: Colors.carousel.bubble_active
  }
})
