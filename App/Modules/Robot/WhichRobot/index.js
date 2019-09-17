import React, { Component } from 'react'
import WhichRobotScreen from './Screen'
import { connect } from 'react-redux'

export class WhichRobotContainer extends Component {
  render () {
    return (
      <WhichRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
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
