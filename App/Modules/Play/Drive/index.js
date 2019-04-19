import React, { Component } from 'react'
import { connect } from 'react-redux'

import { isConnected } from 'App/Services/Connect'
import Drive from 'App/Services/Drive'

import Screen from './Screen'

export class DriveContainer extends Component {
  constructor (props) {
    super(props)
    this.drive = new Drive()
    this.state = {
      showNotConnectedModal: false
    }
  }

  onDraggableRelease = async (touch) => {
    const connected = await isConnected()
    if (connected) {
      this.drive.go(touch)
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  onHideNotConnectedModal = () => {
    this.setState({showNotConnectedModal: false})
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        message='Use joystick to drive'
        showNotConnectedModal={this.state.showNotConnectedModal}
        onDraggableRelease={this.onDraggableRelease}
        onHideNotConnectedModal={this.onHideNotConnectedModal}
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
