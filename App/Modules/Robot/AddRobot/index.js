import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Images } from 'App/Themes'
import AddRobotScreen from './Screen'

export class AddRobotContainer extends Component {
  onAddPress = () => {
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRobotContainer)
