import React, { Component } from 'react'
import { connect } from 'react-redux'

import { isConnected } from 'App/Services/Connect'

import Screen from './Screen'

export class GetStartedContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      connected: false
    }
  }

  componentWillMount () {
    this.updateConnectedStatus()
  }

  updateConnectedStatus = async () => {
    const connected = await isConnected()
    this.setState({connected})
  }

  onDone = () => {
    this.props.navigation.goBack()
  }

  onConnectPress = () => {
    this.props.navigation.navigate('ConnectScreen', {
      onBack: this.updateConnectedStatus
    })
  }

  render () {
    const { connected } = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        connected={connected}
        onDone={this.onDone}
        onConnectPress={this.onConnectPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(GetStartedContainer)
