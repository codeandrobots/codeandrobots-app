import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

const styles = {
  ...Styles,
  view: {
    ...Styles.row
  },
  tab: {
    ...Styles.centered,
    paddingVertical: Metrics.unit,
    borderTopWidth: 1,
    borderTopColor: Colors.transparent
  },
  tab_active: {
    borderTopColor: Colors.primaryDarkTranslucent
  },
  text: {
    ...Styles.text,
    color: Colors.primaryDark
  }
}

export default StyleSheet.create(styles)

export const stylesLight = StyleSheet.create({
  ...styles,
  tab_active: {
    borderTopColor: Colors.whiteTranslucent
  },
  text: {
    ...styles.text,
    color: Colors.white
  }
})
