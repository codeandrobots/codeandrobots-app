import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'

import Screen from './Screen'

export class OnboardingContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    const onSkip = () => navigate('WhichRobotScreen', { hideBack: true })
    const headerRight = <NavButton onPress={onSkip} text='Skip' />
    return { headerRight }
  }

  onDone = () => {
    this.props.navigation.navigate('WhichRobotScreen', { hideBack: true })
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onDone={this.onDone}
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

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer)
