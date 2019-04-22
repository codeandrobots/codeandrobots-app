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
      const sounds = await this.client.getSounds()
      this.setState({ sounds })
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  onPlay = async (sound) => {
    this.client.play(sound)
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
