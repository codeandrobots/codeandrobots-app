import { StyleSheet } from 'react-native'

import { Styles, Metrics, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  imageView: {
    ...Styles.centered,
    marginVertical: Metrics.unit * 3
  },
  videoView: {
    ...Styles.centered,
    marginVertical: Metrics.unit * 3
  },
  titleView: {
    ...Styles.centered,
    marginTop: Metrics.unit * 2
  },
  textView: {
    ...Styles.centered,
    marginTop: Metrics.unit,
    marginBottom: Metrics.unit * 3
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
  title: {
    ...Styles.text
  },
  text: {
    ...Styles.text,
    ...Styles.text_center,
    marginHorizontal: Metrics.unit * 2
  },
  link: {
    fontSize: Fonts.medium
  }
})
