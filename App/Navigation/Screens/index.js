import { Start, Web } from 'App/Containers'
import {
  Home,
  Rate,
  Settings,
  Connect,
  Play,
  Player,
  Drive,
  Beep,
  Discover,
  CodeLab,
  Lessons,
  GetStarted,
  Lab,
  WhichRobot,
  BuildRobot,
  ConnectRobot,
  Onboarding
} from 'App/Modules'
import {
  dynamicTitleNavigationOptions
} from 'App/Navigation/NavigationOptions'

export default {
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
      title: 'Code & Robots',
      headerLeft: null
    })
  },
  RateScreen: {
    screen: Rate,
    navigationOptions: ({navigation}) => ({
      title: 'Spread the word'
    })
  },
  SettingsScreen: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings'
    })
  },
  ConnectScreen: {
    screen: Connect,
    navigationOptions: dynamicTitleNavigationOptions
  },
  PlayScreen: {
    screen: Play,
    navigationOptions: ({navigation}) => ({
      title: 'Play & Explore'
    })
  },
  PlayerScreen: {
    screen: Player,
    navigationOptions: dynamicTitleNavigationOptions
  },
  DriveScreen: {
    screen: Drive,
    navigationOptions: ({navigation}) => ({
      title: 'Drive'
    })
  },
  BeepScreen: {
    screen: Beep,
    navigationOptions: ({navigation}) => ({
      title: 'Beep Beep'
    })
  },
  DiscoverScreen: {
    screen: Discover,
    navigationOptions: ({navigation}) => ({
      title: 'Discover'
    })
  },
  CodeLabScreen: {
    screen: CodeLab,
    navigationOptions: ({navigation}) => ({
      title: 'Code Lab'
    })
  },
  LearnScreen: {
    screen: Lessons,
    navigationOptions: ({navigation}) => ({
      title: 'Learn'
    })
  },
  GetStartedScreen: {
    screen: GetStarted,
    navigationOptions: ({navigation}) => ({
      title: 'Get Started'
    })
  },
  LabScreen: {
    screen: Lab,
    navigationOptions: ({navigation}) => ({
      title: 'Lab'
    })
  },
  WhichRobotScreen: {
    screen: WhichRobot,
    navigationOptions: ({navigation}) => ({
      title: 'Which Robot?'
    })
  },
  BuildRobotScreen: {
    screen: BuildRobot,
    navigationOptions: ({navigation}) => ({
      title: 'Build Instructions'
    })
  },
  ConnectRobotScreen: {
    screen: ConnectRobot,
    navigationOptions: dynamicTitleNavigationOptions
  },
  OnboardingScreen: {
    screen: Onboarding,
    navigationOptions: ({navigation}) => ({
      title: null
    })
  }
}
