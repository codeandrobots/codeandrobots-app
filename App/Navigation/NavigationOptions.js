import { Platform } from 'react-native'

import styles from './Styles/NavigationStyles'

const navigationOptions = (Platform.OS === 'ios')
  ? {
    headerStyle: styles.header,
    headerBackTitle: 'Back'
  }
  : {
    headerStyle: styles.header,
    headerBackTitle: 'Back',
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitleStyle: styles.headerBackTitleStyle,
    headerTintColor: '#FFFFFF'
  }

export default navigationOptions
