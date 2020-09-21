import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'

import Screen from './Screen'

export class WhichRobotContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    const { params = {} } = navigation.state
    const headerRight = (!params.hideSkip)
      ? <NavButton onPress={() => navigate('HomeScreen')} text='Skip' />
      : null
    return (params.hideBack)
      ? { headerLeft: null, headerRight }
      : { headerRight }
  }

  onConnect = () => {
    this.props.navigation.navigate('HomeScreen')
  }

  onPress = (robot, robotConfig) => {
    if (robot === 'simulator') {
      this.props.navigation.navigate('ConnectScreen', {
        robot,
        onDone: this.onConnect
      })
    } else if (robot === 'custom') {
      this.props.navigation.navigate('CustomRobotScreen', {
        robot,
        robotConfig
        // onDone: this.onConnect // TODO
      })
    } else {
      this.props.navigation.navigate('ConnectRobotScreen', {
        robot,
        robotConfig
      })
    }
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onPress={this.onPress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { robots } = state.robots
  return {
    robots: robots ? Object.keys(robots).map(k => robots[k]) : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhichRobotContainer)
