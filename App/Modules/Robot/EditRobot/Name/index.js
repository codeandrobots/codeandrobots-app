import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import { RobotsActions } from 'App/Modules/Robot'
import EditRobotNameScreen from './Screen'

export class EditRobotNameContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    if (params.headerRight) {
      return { headerRight: params.headerRight }
    } else {
      return { headerRight: null }
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      name: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    this.setState({ name: robot.name })

    const headerRight = <NavButton onPress={this.onDonePress} text='Done' />
    this.props.navigation.setParams({ headerRight })
  }

  onDonePress = () => {
    const { name } = this.state
    if (name.trim().length < 1) {
      return
    }

    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    this.props.updateRobot({id: robot.id, name})

    this.props.navigation.goBack()
  }

  onChangeText = (key, value) => {
    this.setState({[key]: value})
  }

  render () {
    const { name } = this.state
    return (
      <EditRobotNameScreen
        name={name}
        onChangeText={this.onChangeText}
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
    updateRobot: (robot) => { dispatch(RobotsActions.updateRobot(robot)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRobotNameContainer)
