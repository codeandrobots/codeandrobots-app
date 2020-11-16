import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client, { setRobot } from 'App/Services/Client'
import { RobotsActions } from 'App/Modules/Robot'
import ImagePicker from 'App/Services/ImagePicker'
import ConnectRobotScreen from './Screen'

export class ConnectRobotContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      robot: null,
      config: null,
      image: null
    }
  }

  async componentWillMount () {
    const { updateRobot } = this.props
    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    const robotConfig = state && state.params && state.params.robotConfig

    this.initRobot(robot, robotConfig)

    // Note: At the moment relying on local URI instead of uploading to cloudinary
    // If needing to enable uploading to cloudinary then add onUpload & move updateRobot to it
    this.picker = new ImagePicker({
      onPick: data => {
        this.setState({ image: {uri: data.uri} })
        updateRobot({
          id: robotConfig.id,
          image: {
            uri: data.uri
          }
        })
        return true
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    if (robot) {
      if (nextProps.robots[robot] !== this.props.robots[robot]) {
        this.initRobot(robot, nextProps.robots[robot])
      }
    }
  }

  initRobot = async (robot, robotConfig) => {
    if (robot) {
      await setRobot(robot, robotConfig)

      if (robotConfig) {
        // Set client config but only generally needed for custom robots
        await this.client.setConfig(robotConfig)
      }

      const config = await this.client.getConfig()
      this.props.navigation.setParams({title: config.name})
      this.setState({ robot, config })
    }
  }

  onConnect = () => {
    this.props.navigation.navigate('HomeScreen')
  }

  onConnectPress = () => {
    const { robot } = this.state
    this.props.navigation.navigate('ConnectScreen', {
      robot,
      onDone: this.onConnect
    })
  }

  onNamePress = () => {
    const { config } = this.state
    this.props.navigation.navigate('EditRobotNameScreen', { robot: config })
  }

  onDescriptionPress = () => {
    const { config } = this.state
    this.props.navigation.navigate('EditRobotDescriptionScreen', { robot: config })
  }

  onChangePicturePress = () => {
    this.picker.open()
  }

  onSetupPress = () => {
    const { config } = this.state
    this.props.navigation.navigate('SetupRobotScreen', { config, goBackOnDone: true })
  }

  onLinkPress = (link) => {
    this.props.navigation.navigate('WebScreen', { source: link.url, title: link.title })
  }

  render () {
    const { robot, config, image } = this.state
    if (!robot || !config) {
      return null
    }

    return (
      <ConnectRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        type={config.type}
        image={image !== null ? image : config.image}
        title={config.name}
        text={config.description}
        links={config.links}
        onLinkPress={this.onLinkPress}
        onNamePress={this.onNamePress}
        onDescriptionPress={this.onDescriptionPress}
        onChangePicturePress={this.onChangePicturePress}
        onSetupPress={this.onSetupPress}
        onConnectPress={this.onConnectPress}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { robots } = state.robots
  return { robots }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRobot: (robot) => { dispatch(RobotsActions.updateRobot(robot)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectRobotContainer)
