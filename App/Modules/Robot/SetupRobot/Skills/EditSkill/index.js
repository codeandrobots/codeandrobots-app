import React, { Component } from 'react'
import { Keyboard, Alert } from 'react-native'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import { capitalizeFirstLetter } from 'App/Services/TextUtils'
import SetupRobotUpdateSkillScreen from './Screen'

export class SetupRobotEditSkillContainer extends Component {
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
    const headerRight = <NavButton onPress={this.onRemovePress} text='Remove' />
    const { command, value } = this.getNavParams()
    this.setState({ command, value })
    this.props.navigation.setParams({headerRight, title: capitalizeFirstLetter(command)})
  }

  getNavParams = () => {
    const { state } = this.props.navigation
    const hasParams = !!state && !!state.params
    const command = hasParams && state.params.command
    const value = hasParams && state.params.value
    const onChange = hasParams && state.params.onChange
    const onRemove = hasParams && state.params.onRemove
    return {
      command,
      value,
      onChange,
      onRemove
    }
  }

  removeSkill = () => {
    const { command, onRemove } = this.getNavParams()
    if (onRemove) {
      onRemove(command)
    }
    this.props.navigation.goBack()
    Keyboard.dismiss()
  }

  onChange = (command, value) => {
    this.setState({ command, value })
    const { onChange } = this.getNavParams()
    if (onChange) {
      onChange(command, value)
    }
  }

  onRemovePress = () => {
    Alert.alert('', 'Are you sure you want to remove?', [
      { text: 'Yes', onPress: () => { this.removeSkill() } },
      { text: 'Cancel', onPress: () => {}, style: 'cancel' }
    ])
  }

  render () {
    const { command, value } = this.state
    return (
      <SetupRobotUpdateSkillScreen
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotEditSkillContainer)
