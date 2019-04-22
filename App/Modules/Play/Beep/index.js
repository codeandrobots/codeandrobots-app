import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client, { isConnected } from 'App/Services/Client'

import Screen from './Screen'

export class BeepContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      sounds: [],
      showNotConnectedModal: false
    }
  }

  async componentWillMount () {
    const connected = await isConnected()
    if (connected) {
      this.updateSounds()
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  updateSounds = async () => {
    const sounds = await this.client.getSounds()
    this.setState({ sounds })
  }

  onPlay = async (sound) => {
    const connected = await isConnected()
    if (connected) {
      this.client.play(sound)
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  onHideNotConnectedModal = () => {
    this.setState({showNotConnectedModal: false})
  }

  render () {
    const { sounds } = this.state
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
        onBack={this.updateSounds}
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
