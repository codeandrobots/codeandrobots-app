import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client, { isConnected } from 'App/Services/Client'

import Screen from './Screen'

export class DriveContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      showNotConnectedModal: false
    }
  }

  async componentWillMount () {
    const connected = await isConnected()
    if (!connected) {
      this.setState({showNotConnectedModal: true})
    }
  }

  onDraggableMove = (touch) => {
    this.client.move(touch)
  }

  onDraggableRelease = async (touch) => {
    const connected = await isConnected()
    if (connected) {
      this.client.moveAndStop(touch)
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
        onDraggableMove={this.onDraggableMove}
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
