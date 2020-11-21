import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import SetupRobotNewSkillScreen from './Screen'

export class SetupRobotNewSkillContainer extends Component {
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
      command: null,
      value: null
    }
  }

  componentWillMount () {
    const headerRight = <NavButton onPress={this.onAddPress} text='Add' />
    this.props.navigation.setParams({ headerRight })
  }

  onChange = (command, value) => {
    this.setState({ command, value })
  }

  onAddPress = () => {
    const { command, value } = this.state
    if (command.trim().length < 1 || value.trim().length < 1) {
      return
    }
    const { state } = this.props.navigation
    if (state && state.params && state.params.onAddSkill) {
      state.params.onAddSkill({title: command, cmd: value})
    }
    this.props.navigation.goBack()
  }

  render () {
    const { command, value } = this.state
    return (
      <SetupRobotNewSkillScreen
        command={command}
        value={value}
        onChange={this.onChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotNewSkillContainer)
