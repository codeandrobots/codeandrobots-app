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
      showNotConnectedModal: false,
      params: []
    }
  }

  async componentWillMount () {
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.props.navigation.setParams({title: config.name})
      this.setState({ config })
    } else {
      this.props.navigation.setParams({title: 'Player'})
      this.setState({showNotConnectedModal: true})
    }
  }

  onConnect = async () => {
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
      const { params } = this.state
      for (var param of params) {
        this.client.setParam(param, param.index)
      }
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

  onSliderPress = async (index) => {
    const { config, params } = this.state
    const connected = await isConnected()
    if (connected) {
      // TODO support setting multiple params
      this.client.setParam(config.params[0], index)
      params[0] = {
        ...config.params[0],
        index
      }
      this.setState({params})
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  onSkillPress = async (category, index) => {
    const connected = await isConnected()
    if (connected) {
      this.client.doSkill(category, index)
    } else {
      this.setState({showNotConnectedModal: true})
    }
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
        onConnect={this.onConnect}
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
