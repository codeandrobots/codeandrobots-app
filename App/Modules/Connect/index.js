import React, { Component } from 'react'
import { Linking } from 'react-native'
import { connect } from 'react-redux'

import Bluetooth from 'App/Services/Bluetooth'
import WebSocket from 'App/Services/WebSocket'
import { isSimulator } from 'App/Services/Properties'
import { notPossibleInSimulator } from 'App/Services/Alerts'

import Screen from './Screen'

export class ConnectContainer extends Component {
  constructor (props) {
    super(props)
    this.socket = WebSocket.getInstance()
    const instructions = `To view the simulator, open the following link on another device (e.g. your laptop):\ncodeandrobots.com/simulator?room=${this.socket.room}`
    this.state = {
      error: null,
      connectTo: null,
      enabled: false,
      scanning: false,
      devices: [],
      activeDevice: null,
      showProblemsConnectingModal: false,
      showIsYourDeviceSupportedModal: false,
      instructions
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

  onConnectTo = (connectTo) => {
    if (connectTo === 'simulator') {
      this.socket.connect()
    }
    this.setState({ connectTo })
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

  onEmailInstructions = () => {
    if (isSimulator()) { return notPossibleInSimulator() }
    const subject = 'Code & Robots simulator instructions'
    const body = this.state.instructions
    const mailtoURL = `mailto:?subject=${subject}&body=${body}`

    Linking.canOpenURL(mailtoURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(mailtoURL).catch((error) => { console.warn(error) })
        }
      })
  }

  onProblemsConnecting = () => {
    this.setState({showProblemsConnectingModal: true})
  }

  onIsYourDeviceSupported = () => {
    this.setState({showIsYourDeviceSupportedModal: true})
  }

  onHideProblemsConnectingModal = () => {
    this.setState({showProblemsConnectingModal: false})
  }

  onHideIsYourDeviceSupportedModal = () => {
    this.setState({showIsYourDeviceSupportedModal: false})
  }

  render () {
    const {
      error,
      connectTo,
      enabled,
      scanning,
      connecting,
      devices,
      activeDevice,
      showProblemsConnectingModal,
      instructions,
      showIsYourDeviceSupportedModal} = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        error={error}
        connectTo={connectTo}
        enabled={enabled}
        scanning={scanning}
        connecting={connecting}
        devices={devices}
        activeDevice={activeDevice}
        showProblemsConnectingModal={showProblemsConnectingModal}
        showIsYourDeviceSupportedModal={showIsYourDeviceSupportedModal}
        instructions={instructions}
        onConnectTo={this.onConnectTo}
        onEnableBluetooth={this.onEnableBluetooth}
        onScan={this.onScan}
        onConnect={this.onConnect}
        onDisconnect={this.onDisconnect}
        onDone={this.onDone}
        onEmailInstructions={this.onEmailInstructions}
        onProblemsConnecting={this.onProblemsConnecting}
        onIsYourDeviceSupported={this.onIsYourDeviceSupported}
        onHideProblemsConnectingModal={this.onHideProblemsConnectingModal}
        onHideIsYourDeviceSupportedModal={this.onHideIsYourDeviceSupportedModal}
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
