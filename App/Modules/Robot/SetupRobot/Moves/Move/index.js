import React, { Component } from 'react'
import { connect } from 'react-redux'

import SetupRobotMoveScreen from './Screen'
import { capitalizeFirstLetter } from 'App/Services/TextUtils'

export class SetupRobotMoveContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      command: null,
      value: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    const command = state && state.params && state.params.command
    const value = state && state.params && state.params.value
    this.setState({ command, value })
    this.props.navigation.setParams({title: capitalizeFirstLetter(command)})
  }

  onChange = (command, value) => {
    this.setState({ command, value })
    const { state } = this.props.navigation
    if (state && state.params && state.params.onChange) {
      state.params.onChange(command, value)
    }
  }

  render () {
    const { command, value } = this.state
    return (
      <SetupRobotMoveScreen
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotMoveContainer)
