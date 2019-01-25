import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

import { StackNavigator } from 'react-navigation'

import Screens from './Screens'

import navigationOptions from './NavigationOptions'

const AppNavigation = StackNavigator(Screens, {
  initialRouteName: 'StartScreen',
  navigationOptions: navigationOptions,
  transitionConfig: () => ({
    screenInterpolator: props => {
      const params = props.scene.route.params || {}
      const isVerticalTransition = (params.transition && params.transition === 'vertical')

      // forHorizontal makes the scene transition for Left to Right
      // forVertical makes the scene transition for Top to Bottom
      return (isVerticalTransition)
        ? CardStackStyleInterpolator.forVertical(props)
        : CardStackStyleInterpolator.forHorizontal(props)
    }
  })
})

export default AppNavigation
