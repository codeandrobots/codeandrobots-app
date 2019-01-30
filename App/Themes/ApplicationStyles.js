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
    }
  }
}

export default ApplicationStyles
