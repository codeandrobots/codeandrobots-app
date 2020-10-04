import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import { RobotsActions } from 'App/Modules/Robot'
import EditRobotDescriptionScreen from './Screen'

export class EditRobotDescriptionContainer extends Component {
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
      description: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    this.setState({ description: robot.description })

    const headerRight = <NavButton onPress={this.onDonePress} text='Done' />
    this.props.navigation.setParams({ headerRight })
  }

  onDonePress = () => {
    const { description } = this.state
    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    this.props.updateRobot({id: robot.id, description})

    this.props.navigation.goBack()
  }

  onChangeText = (key, value) => {
    this.setState({[key]: value})
  }

  render () {
    const { description } = this.state
    return (
      <EditRobotDescriptionScreen
        description={description}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditRobotDescriptionContainer)
