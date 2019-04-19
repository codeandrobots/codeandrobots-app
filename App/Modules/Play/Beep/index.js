import React, { Component } from 'react'
import { connect } from 'react-redux'

import { isConnected } from 'App/Services/Connect'
import { sounds, play } from 'App/Services/Beep'

import Screen from './Screen'

export class BeepContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showNotConnectedModal: false
    }
  }

  onPlay = async (sound) => {
    const connected = await isConnected()
    if (connected) {
      play(sound)
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
        sounds={sounds}
        showNotConnectedModal={this.state.showNotConnectedModal}
        onPlay={this.onPlay}
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

export default connect(mapStateToProps, mapDispatchToProps)(BeepContainer)
