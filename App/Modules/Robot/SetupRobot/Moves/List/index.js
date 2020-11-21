import React, { Component } from 'react'
import { connect } from 'react-redux'

import SetupRobotMovesScreen from './Screen'

export class SetupRobotMovesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commands: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    this.setState({commands: state && state.params && state.params.commands})
  }

  onChange = (commands) => {
    this.setState({ commands })
    const { state } = this.props.navigation
    if (state && state.params && state.params.onChange) {
      state.params.onChange({ commands })
    }
  }

  onChangeCommand = (command, value) => {
    const { commands } = this.state
    commands[command] = value
    this.onChange(commands)
  }

  onCommandPress = (command, value) => {
    this.props.navigation.navigate('SetupRobotMoveScreen', {
      command,
      value,
      onChange: this.onChangeCommand
    })
  }

  render () {
    const { commands } = this.state
    return (
      <SetupRobotMovesScreen
        commands={commands}
        onCommandPress={this.onCommandPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotMovesContainer)
