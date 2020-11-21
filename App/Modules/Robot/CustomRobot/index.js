import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Images } from 'App/Themes'
import CustomRobotScreen from './Screen'

import OttoConfig from 'App/Services/Client/Otto/Config'
import NybbleConfig from 'App/Services/Client/Nybble/Config'

// Only include config that is relevant to custom robots
const pickConfig = (config) => {
  const customConfig = _.pick(config, 'connection', 'moves', 'skills')
  customConfig.commands = {
    stop: config.commands.stop,
    ...config.commands.walk
  }
  return customConfig
}

const links = [
  { title: 'Add custom robot', config: {} },
  { title: 'Add custom OttoDIY robot', config: pickConfig(OttoConfig) },
  { title: 'Add custom Nybble robot', config: pickConfig(NybbleConfig) }
]

export class CustomRobotContainer extends Component {
  onLinkPress = (link) => {
    this.props.navigation.navigate('AddRobotScreen', { config: link.config })
  }

  render () {
    return (
      <CustomRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        image={Images.robots.custom_robot}
        title={'Custom robot'}
        text={'Let’s see if your robot has what it takes.'}
        links={links}
        onLinkPress={this.onLinkPress}
        {...this.props}
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomRobotContainer)
