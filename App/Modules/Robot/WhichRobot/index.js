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
    return { headerRight }
  }

  onConnect = () => {
    this.props.navigation.navigate('HomeScreen')
  }

  onPress = (robot) => {
    this.props.navigation.navigate('ConnectScreen', {
      robot,
      onDone: this.onConnect
    })
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
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhichRobotContainer)
