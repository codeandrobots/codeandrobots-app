import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from '../Components'

export class HomeContainer extends Component {
  onLearnMorePress = () => {
    this.props.navigation.navigate('WebScreen', {
      source: 'http://www.codeandrobots.com'
    })
  }

  onRatePress = () => {
    this.props.navigation.navigate('RateScreen')
  }

  onHomePress = () => {}

  onSettingsPress = () => {
    this.props.navigation.navigate('SettingsScreen')
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onLearnMorePress={this.onLearnMorePress}
        onRatePress={this.onRatePress}
        onHomePress={this.onHomePress}
        onSettingsPress={this.onSettingsPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
