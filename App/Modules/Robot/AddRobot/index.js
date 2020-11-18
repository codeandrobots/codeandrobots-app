import React, { Component } from 'react'
import { Keyboard } from 'react-native'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import { RobotsActions } from 'App/Modules/Robot'
import AddRobotScreen from './Screen'

export class AddRobotContainer extends Component {
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
      name: ''
    }
  }

  componentWillMount () {
    const headerRight = <NavButton onPress={this.onNextPress} text='Next' />
    this.props.navigation.setParams({ headerRight })
  }

  onChangeText = (key, value) => {
    this.setState({[key]: value})
  }

  onNextPress = () => {
    const { name } = this.state
    if (name.trim().length < 1) {
      return
    }

    const { state } = this.props.navigation
    const config = state && state.params && state.params.config
    config.name = name

    this.props.navigation.navigate('SetupRobotScreen', { config })
    Keyboard.dismiss()
  }

  render () {
    const { name } = this.state
    return (
      <AddRobotScreen
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
    addRobot: (robot) => { dispatch(RobotsActions.saveRobot(robot)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRobotContainer)
