import { StyleSheet } from 'react-native'

import { Styles, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  text: {
    ...Fonts.style.button,
    color: Colors.button.text,
    textDecorationLine: 'underline'
  }
})
