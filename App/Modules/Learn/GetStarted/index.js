import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from './Screen'

export class GetStartedContainer extends Component {
  onDone = () => {
    this.props.navigation.goBack()
  }

  onLearnMorePress = () => {
    this.props.navigation.navigate('WebScreen', {
      source: 'http://www.codeandrobots.com'
    })
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onDone={this.onDone}
        onLearnMorePress={this.onLearnMorePress}
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

export default connect(mapStateToProps, mapDispatchToProps)(GetStartedContainer)
