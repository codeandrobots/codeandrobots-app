import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from '../Components'

export class HomeContainer extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
