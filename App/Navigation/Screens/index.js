import { Start, Web } from 'App/Containers'
import { Home, Rate } from 'App/Modules'

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
  },
  RateScreen: {
    screen: Rate,
    navigationOptions: ({navigation}) => ({
      title: 'Spread the word'
    })
  }
}

export default Screens
