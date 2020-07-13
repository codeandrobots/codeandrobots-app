import { StyleSheet } from 'react-native'

import { Styles, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  containerView_video: {
    backgroundColor: Colors.primary
  },
  joystickView: {
    ...Styles.center,
    marginBottom: 200 // footer height
  },
  videoView: {
    ...Styles.center,
    backgroundColor: Colors.primary,
    marginBottom: 200 // footer height
  }
})
