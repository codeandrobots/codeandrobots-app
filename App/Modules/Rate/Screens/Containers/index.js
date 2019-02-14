import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from '../Components'

export class RateContainer extends Component {
  onRatePress = () => {
    // TODO
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onRatePress={this.onRatePress}
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

export default connect(mapStateToProps, mapDispatchToProps)(RateContainer)
