import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../Themes/'

export const tabBarStyle = {
  height: 44,
  paddingVertical: 0,
  backgroundColor: '#fff',
  borderTopWidth: (Platform.OS === 'ios') ? 1 : 0,
  borderTopColor: '#EBEBEB'
}

export default StyleSheet.create({
  header: {
    backgroundColor: (Platform.OS === 'ios') ? Colors.navBackgroundIOS : Colors.navBackgroundAndroid,
    borderBottomWidth: (Platform.OS === 'ios') ? 1 : 0,
    borderBottomColor: Colors.navBorderBottom
  },
  headerTitleStyle: {
    color: Colors.navTextColorAndroid
  },
  headerBackTitleStyle: {
    color: Colors.navTextColorAndroid
  }
})
