import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client, { isConnected } from 'App/Services/Client'

import Screen from './Screen'

export class PlayerContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      config: null,
      showNotConnectedModal: false
    }
  }

  async componentWillMount () {
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
    } else {
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

  onSliderPress = (index) => {
    const { config } = this.state
    // TODO support setting multiple params
    this.client.setParam(config.params[0], index)
  }

  onSkillPress = (index) => {
    this.client.doSkill(index)
  }

  onHideNotConnectedModal = () => {
    this.setState({showNotConnectedModal: false})
  }

  render () {
    const { config } = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        config={config}
        message='Use joystick to drive'
        showNotConnectedModal={this.state.showNotConnectedModal}
        onDraggableMove={this.onDraggableMove}
        onDraggableRelease={this.onDraggableRelease}
        onSliderPress={this.onSliderPress}
        onSkillPress={this.onSkillPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
