import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  videoPlayer: {
    width: 343,
    height: 232,
    borderRadius: Metrics.unit,
    borderWidth: 2,
    borderColor: Colors.primary
  },
  videoPlayer_small: {
    width: 165,
    height: 112
  },
  videoButton: {
    position: 'absolute',
    zIndex: 9999
  },
  videoView: {
    ...Styles.centered,
    marginHorizontal: Metrics.unit,
    flexDirection: 'column',
    flex: 1
  }
})
