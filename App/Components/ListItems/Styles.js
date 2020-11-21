import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  text: {
    ...Styles.text,
    height: 22
  },
  itemView: {
    flexDirection: 'row',
    margin: Metrics.unit,
    padding: Metrics.unit,
    borderRadius: Metrics.unit,
    backgroundColor: Colors.primary
  },
  itemView_square: {
    flex: 0,
    flexDirection: 'column',
    width: (Metrics.screenWidth / 2) - (Metrics.unit * 2)
  },
  itemView_compact: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
    marginRight: Metrics.unit,
    paddingVertical: Metrics.unit * 2,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderBottomColor: Colors.list.separator,
    backgroundColor: Colors.transparent
  },
  itemView_featured: {
    flex: 0,
    flexDirection: 'column',
    padding: 0,
    width: (Metrics.screenWidth / 2) - (Metrics.unit * 3),
    backgroundColor: Colors.transparent
  },
  itemView_stat: {
    flex: 0,
    flexDirection: 'column',
    padding: 0,
    width: (Metrics.screenWidth / 2) - (Metrics.unit * 3),
    backgroundColor: Colors.transparent
  },
  itemView_disabled: {
    backgroundColor: Colors.background_disabled
  },
  itemView_card: {
    flexDirection: 'row',
    margin: Metrics.unit,
    padding: Metrics.unit,
    borderRadius: Metrics.unit,
    backgroundColor: Colors.white
  },
  itemOuterBorder: {
    padding: Metrics.unit,
    borderColor: Colors.lightgrey,
    borderWidth: 1
  },
  itemOuterBorder_featured: {
    width: (Metrics.screenWidth / 2) - (Metrics.unit * 3),
    height: (Metrics.screenWidth / 2) - (Metrics.unit * 3),
    borderRadius: (((Metrics.screenWidth / 2) - (Metrics.unit * 3)) / 2)
  },
  itemInnerBorder: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.lightgrey,
    borderWidth: 1
  },
  itemInnerBorder_featured: {
    width: (Metrics.screenWidth / 2) - (Metrics.unit * 3) - (Metrics.unit * 2) - 2,
    height: (Metrics.screenWidth / 2) - (Metrics.unit * 3) - (Metrics.unit * 2) - 2,
    borderRadius: (((Metrics.screenWidth / 2) - (Metrics.unit * 3) - (Metrics.unit * 2) - 2) / 2)
  },
  imageView: {
    marginHorizontal: Metrics.unit,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageView_square: {
    margin: Metrics.unit
  },
  imageView_compact: {
    marginRight: Metrics.unit
  },
  imageView_featured: {
    flex: 1,
    margin: Metrics.unit
  },
  imageView_card: {
    maxWidth: 118,
    maxHeight: 80,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: Metrics.media.border,
    borderColor: Colors.primary,
    flex: 1,
    flexDirection: 'row'
  },
  customImageContainer_card: {
    maxWidth: 118,
    maxHeight: 80,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  customImageView_card: {
    borderWidth: 1,
    borderRadius: Metrics.unit,
    borderColor: Colors.primary,
    padding: Metrics.unit / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoView_card: {
    maxWidth: 165,
    maxHeight: 112
  },
  image: {
    maxWidth: 55,
    maxHeight: 55
  },
  image_card: {
    maxWidth: 110,
    maxHeight: 75,
    resizeMode: 'contain',
    borderRadius: Metrics.unit
  },
  customImage_card: {
    borderRadius: Metrics.unit
  },
  image_compact: {
    maxWidth: 20,
    maxHeight: 20
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: Metrics.unit
  },
  textView_square: {
    flex: 0,
    alignItems: 'center'
  },
  textView_compact: {
    margin: 0
  },
  textView_featured: {
    alignItems: 'center',
    marginTop: Metrics.unit * 2
  },
  textView_card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: Metrics.unit
  },
  text_card: {
    ...Styles.text
  },
  text_subtitle: {
    ...Styles.text,
    marginLeft: Metrics.unit,
    color: Colors.grey
  },
  title_card: {
    ...Styles.text,
    marginVertical: Metrics.unit / 2
  },
  buttonView: {
    justifyContent: 'center',
    margin: Metrics.unit
  },
  buttonView_square: {
    alignItems: 'center'
  },
  buttonView_compact: {
    margin: 0,
    marginLeft: Metrics.unit
  },
  buttonView_featured: {
    flex: 1,
    alignItems: 'center'
  },
  statView: {
    ...Styles.row
  },
  stat: {
    ...Styles.column,
    marginLeft: Metrics.unit / 2
  },
  statTitle: {
    ...Styles.text,
    color: Colors.primary
  },
  statValue: {
    ...Styles.text,
    fontSize: Fonts.size.large
  }
})
