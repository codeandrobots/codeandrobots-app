import React, { Component } from 'react'
import { connect } from 'react-redux'

import Bluetooth from 'App/Services/Bluetooth'

import Screen from './Screen'

export class ConnectContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      enabled: false,
      scanning: false,
      devices: [],
      activeDevice: null,
      showProblemsConnectingModal: false
    }
  }

  async componentWillMount () {
    const { enabled, error } = await Bluetooth.isEnabled()
    this.setState({enabled, error})
    if (enabled) {
      this.showDevices()
    }
  }

  showDevices = async () => {
    const { devices, error } = await Bluetooth.list()
    this.setState({devices, error})
  }

  onEnableBluetooth = async () => {
    // TODO Only supported by Android, need to go to Bluetooth settings on iOS
    const { enabled, error } = await Bluetooth.enable()
    this.setState({enabled, error})
    if (enabled) {
      this.showDevices()
    }
  }

  onScan = async () => {
    this.setState({scanning: true})
    const { devices, error } = await Bluetooth.scan()
    if (!error) {
      this.setState({scanning: false, devices, error})
    } else {
      this.setState({scanning: false, error})
    }
  }

  onConnect = async (device) => {
    const activeDevice = {
      ...device,
      isConnecting: true,
      isConnected: false,
      error: null
    }
    this.setState({activeDevice})

    const { error } = await Bluetooth.connect(device)

    activeDevice.isConnecting = false
    if (error) {
      activeDevice.error = error
    } else {
      activeDevice.isConnected = true
    }
    this.setState({activeDevice})
  }

  onDisconnect = () => {
    Bluetooth.disconnect()
    this.setState({activeDevice: null})
  }

  onDone = () => {
    const { state } = this.props.navigation
    const onBack = state && state.params && state.params.onBack
    if (onBack) {
      onBack()
    }
    this.props.navigation.goBack()
  }

  onProblemsConnecting = () => {
    this.setState({showProblemsConnectingModal: true})
  }

  onHideProblemsConnectingModal = () => {
    this.setState({showProblemsConnectingModal: false})
  }

  render () {
    const {
      error,
      enabled,
      scanning,
      connecting,
      devices,
      activeDevice,
      showProblemsConnectingModal} = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        error={error}
        enabled={enabled}
        scanning={scanning}
        connecting={connecting}
        devices={devices}
        activeDevice={activeDevice}
        showProblemsConnectingModal={showProblemsConnectingModal}
        onEnableBluetooth={this.onEnableBluetooth}
        onScan={this.onScan}
        onConnect={this.onConnect}
        onDisconnect={this.onDisconnect}
        onDone={this.onDone}
        onProblemsConnecting={this.onProblemsConnecting}
        onHideProblemsConnectingModal={this.onHideProblemsConnectingModal}
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectContainer)
