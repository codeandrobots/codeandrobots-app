import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Images } from 'App/Themes'
import { RobotsActions } from 'App/Modules/Robot'
import AddRobotScreen from './Screen'
import config from './config'

export class AddRobotContainer extends Component {
  onAddPress = () => {
    this.props.addRobot({
      id: 'test',
      ...config,
      name: 'Robot 1'
    })
    this.props.navigation.goBack() // TODO fix
  }

  render () {
    return (
      <AddRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        image={Images.robots.custom_robot}
        title={'Custom robot'}
        text={'Let’s see if your robot has what it takes.'}
        onAddPress={this.onAddPress}
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
    addRobot: (robot) => { dispatch(RobotsActions.saveRobot(robot)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRobotContainer)
