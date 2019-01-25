import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

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
      marginHorizontal: Metrics.baseMarginX2,
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
    }
  }
}

export default ApplicationStyles
