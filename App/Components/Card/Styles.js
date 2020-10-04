import { StyleSheet } from 'react-native'

import { Styles, Metrics, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  qrView: {
    ...Styles.centered,
    marginVertical: Metrics.unit * 3
  },
  imageView: {
    ...Styles.centered,
    marginVertical: Metrics.unit * 3
  },
  image: {
    borderRadius: Metrics.unit
  },
  videoView: {
    ...Styles.centered,
    marginVertical: Metrics.unit * 3
  },
  titleView: {
    marginTop: Metrics.unit * 2
  },
  titleView_padded: {
    paddingHorizontal: Metrics.unit * 2
  },
  titleText: {
    ...Styles.text,
    fontSize: 18
  },
  textView: {
    marginTop: Metrics.unit,
    marginBottom: Metrics.unit * 3
  },
  textView_padded: {
    paddingHorizontal: Metrics.unit * 2
  },
  videoPlayer: {
    marginHorizontal: Metrics.unit * 2,
    width: Metrics.screenWidth - (Metrics.unit * 4), // 16:9 aspect ratio
    height: (Metrics.screenWidth - (Metrics.unit * 4)) / 1.77777778, // 16:9 aspect ratio
    borderRadius: Metrics.unit
  },
  videoButton: {
    position: 'absolute',
    zIndex: 9999
  },
  link: {
    fontSize: Fonts.medium
  }
})
