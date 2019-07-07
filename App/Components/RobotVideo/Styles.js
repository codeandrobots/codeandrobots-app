import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  videoPlayer: {
    width: 165,
    height: 112,
    borderRadius: Metrics.unit,
    borderWidth: 2,
    borderColor: Colors.primary
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
