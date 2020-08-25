import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  videoView: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingTop: Metrics.unit * 5
  },
  videoPlayer: {
    width: Metrics.screenWidth - (Metrics.unit * 10),
    height: ((Metrics.screenWidth - (Metrics.unit * 10)) * 1.3),
    borderRadius: Metrics.media.border,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white
  },
  videoPlayer_small: {
    width: 240,
    height: 320
  },
  videoPlayerLoading: {
    position: 'absolute',
    zIndex: 9999,
    width: Metrics.screenWidth - (Metrics.unit * 10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoPlayerLoading_small: {
    width: 240
  },
  videoPlayerLoadingText: {
    ...Styles.text,
    color: Colors.primary
  }
})
