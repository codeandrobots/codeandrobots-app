import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  view: {
    ...Styles.row,
    alignItems: 'center',
    margin: Metrics.unit,
    paddingVertical: Metrics.unit / 2,
    paddingHorizontal: Metrics.unit,
    backgroundColor: Colors.primary,
    borderRadius: Metrics.unit / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: Metrics.unit / 2,
    elevation: 1
  },
  icon: {
    marginLeft: Metrics.unit / 2
  },
  title: {
    flex: 1,
    ...Styles.text,
    fontSize: Fonts.size.large,
    color: Colors.white,
    margin: Metrics.unit / 2
  },
  title_default: {
    color: Colors.primaryDark
  },
  close: {
    marginTop: 3,
    padding: Metrics.unit / 2
  }
})
