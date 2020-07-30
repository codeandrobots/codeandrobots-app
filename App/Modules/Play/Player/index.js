import React, { Component } from 'react'
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation-locker'

import Client, { isConnected } from 'App/Services/Client'

import { NavButton } from 'App/Components'
import PortraitScreen from './Portrait/Screen'
import LandscapeScreen from './Landscape/Screen'

export class PlayerContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    if (params.showLogs) {
      const { navigate } = navigation
      const onLogsPress = () => navigate('PlayerLogsScreen')
      const headerRight = <NavButton onPress={onLogsPress} text='Logs' />
      return { headerRight }
    } else {
      return {}
    }
  }

  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      orientation: null,
      config: null,
      showNotConnectedModal: false,
      params: []
    }
  }

  async componentWillMount () {
    // Support landscape by default
    let supportLandscape = true

    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.props.navigation.setParams({
        title: config.name,
        showLogs: config.features && config.features.video === true
      })
      this.setState({ config })

      if (config && config.features && config.features.landscape === false) {
        supportLandscape = false
      }
    } else {
      this.props.navigation.setParams({title: 'Player'})
      this.setState({showNotConnectedModal: true})
    }

    if (supportLandscape) {
      Orientation.unlockAllOrientations()
      Orientation.getOrientation((orientation) => {
        this.setOrientation(orientation)
      })
    }
    Orientation.addOrientationListener(this.onOrientationDidChange)
  }

  componentWillUnmount () {
    Orientation.lockToPortrait()
    Orientation.removeOrientationListener(this.onOrientationDidChange)
    setTimeout(() => {
      // Dummy timeout
    }, 500)
  }

  setOrientation = (orientation) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      this.setState({ orientation: 'landscape' })
    } else {
      this.setState({ orientation: 'portrait' })
    }
  }

  onOrientationDidChange = (orientation) => {
    this.setOrientation(orientation)
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
    const { config, orientation } = this.state
    const PlayerScreen = (!orientation || orientation === 'portrait')
      ? PortraitScreen : LandscapeScreen
    return (
      <PlayerScreen
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
