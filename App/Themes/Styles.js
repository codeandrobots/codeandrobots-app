import { StyleSheet as StyleSheetRN } from 'react-native'

import Metrics from './Metrics'
import Colors from './Colors'
import Fonts from './Fonts'

import { isIphoneX } from 'App/Services/Properties'

export const Styles = {
  // Layout
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    height: Metrics.screenHeight
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    minHeight: 80,
    backgroundColor: Colors.footer.background,
    paddingTop: Metrics.unit * 4,
    paddingBottom: (isIphoneX()) ? Metrics.unit * 5 : Metrics.unit * 4
  },

  // Typography
  text: {
    ...Fonts.style.normal,
    color: Colors.text
  },
  text_center: {
    textAlign: 'center'
  }
}

export const StyleSheet = StyleSheetRN.create(Styles)
