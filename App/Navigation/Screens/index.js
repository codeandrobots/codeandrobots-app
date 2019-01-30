import Start from 'App/Containers/StartContainer'
import Web from 'App/Containers/WebContainer'
import { Home } from 'App/Modules/Home'

const Screens = {
  StartScreen: {
    screen: Start,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  WebScreen: {
    screen: Web
  },
  HomeScreen: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Code & Robots'
    })
  }
}

export default Screens
