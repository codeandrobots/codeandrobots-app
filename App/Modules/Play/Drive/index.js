import React, { Component } from 'react'
import { connect } from 'react-redux'

import Drive from 'App/Services/Drive'

import Screen from './Screen'

export class DriveContainer extends Component {
  constructor (props) {
    super(props)
    this.drive = Drive.getInstance()
  }

  onDraggableRelease = (touch) => {
    this.drive.go(touch)
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        message='Use joystick to drive'
        onDraggableRelease={this.onDraggableRelease}
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

export default connect(mapStateToProps, mapDispatchToProps)(DriveContainer)
