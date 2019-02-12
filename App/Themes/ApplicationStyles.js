import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

import { isIphoneX } from 'App/Services/Properties'

const ApplicationStyles = {
  screen: {
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
      height: Metrics.screenHeight
    },
    navButton: {
      marginHorizontal: Metrics.marginX2,
      justifyContent: 'center'
    },
    navButtonText: {
      ...Fonts.style.normalBold,
      color: Colors.snow
    },
    fullScreenGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '120%'
    },
    helloImage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: Metrics.marginX6
    },
    text: {
      ...Fonts.style.normal,
      color: Colors.text
    },
    button: {
      backgroundColor: Colors.button.background,
      borderWidth: Metrics.button.border,
      borderColor: Colors.button.border,
      borderRadius: Metrics.button.radius,
      paddingVertical: Metrics.margin,
      paddingHorizontal: Metrics.marginX3,
      minWidth: Metrics.button.minWidth
    },
    buttonText: {
      ...Fonts.style.button,
      color: Colors.button.text,
      textAlign: 'center'
    },
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    sectionTitle: {
      marginTop: Metrics.marginX3
    },
    sectionSubtitle: {
      marginTop: Metrics.margin,
      marginBottom: Metrics.marginX2
    },
    sectionSubtitleText: {
      ...Fonts.style.normal,
      color: Colors.text,
      textAlign: 'center',
      marginHorizontal: Metrics.marginX2
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      minHeight: 80,
      backgroundColor: Colors.footer.background,
      paddingBottom: (isIphoneX()) ? Metrics.marginX4 : Metrics.marginX3
    },
    footerSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    footerTitle: {
      marginTop: Metrics.marginX3
    },
    footerSubtitle: {
      marginTop: Metrics.margin,
      marginBottom: Metrics.marginX2
    },
    footerSubtitleText: {
      ...Fonts.style.normal,
      color: Colors.text,
      textAlign: 'center',
      marginHorizontal: Metrics.marginX2
    },
    footerTop: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: 58,
      backgroundColor: Colors.background
    },
    footerButtons: {
      flex: 1,
      flexDirection: 'row',
      height: 116,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center'
    },
    footerButton: {
      width: 116,
      height: 116,
      marginHorizontal: 16
    },
    footerButtonSmall: {
      width: 66,
      height: 66
    },
    footerButtonOutter: {
      position: 'absolute',
      paddingTop: 8,
      paddingLeft: 8,
      width: 116,
      height: 116,
      backgroundColor: 'rgba(255,255,255,0.25)',
      borderRadius: Metrics.button.radius
    },
    footerButtonInner: {
      position: 'relative',
      width: 100,
      height: 100,
      borderRadius: Metrics.button.radius,
      backgroundColor: Colors.button.background
    },
    footerButtonOutterSmall: {
      width: 66,
      height: 66
    },
    footerButtonInnerSmall: {
      position: 'relative',
      width: 50,
      height: 50
    },
    footerButtonIcon: {
      backgroundColor: 'transparent',
      width: '100%',
      textAlign: 'center',
      marginTop: 31
    },
    footerButtonIconSmall: {
      marginTop: 14
    }
  }
}

export default ApplicationStyles
