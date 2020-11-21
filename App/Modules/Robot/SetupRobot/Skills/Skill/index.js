import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import SetupRobotSkillScreen from './Screen'

export class SetupRobotSkillContainer extends Component {
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
      skill: null
    }
  }

  componentWillMount () {
    const headerRight = <NavButton onPress={this.onRemovePress} text='Remove' />
    const { skill } = this.getNavParams()
    this.setState({ skill })
    if (skill && skill.category) {
      this.props.navigation.setParams({headerRight, title: skill.category})
    }
  }

  getNavParams = () => {
    const { state } = this.props.navigation
    const hasParams = !!state && !!state.params
    const skill = hasParams && state.params.skill
    const onChange = hasParams && state.params.onChange
    const onRemove = hasParams && state.params.onRemove
    return {
      skill,
      onChange,
      onRemove
    }
  }

  removeSkillCategory = () => {
    const { skill, onRemove } = this.getNavParams()
    if (onRemove) {
      onRemove(skill)
    }
    this.props.navigation.goBack()
  }

  onChange = (skill) => {
    const { onChange } = this.getNavParams()
    this.setState({ skill })
    if (onChange) {
      onChange(skill)
    }
  }

  onChangeSkill = (command, value) => {
    const { skill } = this.state
    const index = skill.items.findIndex(item => item.title === command)
    skill.items[index] = {title: command, cmd: value}
    this.setState({ skill })
    this.onChange(skill)
  }

  onRemoveSkill = (command) => {
    const { skill } = this.state
    const index = skill.items.findIndex(item => item.title === command)
    skill.items.splice(index, 1)
    this.setState({ skill })
    this.onChange(skill)
  }

  onSkillPress = (command, value) => {
    this.props.navigation.navigate('SetupRobotEditSkillScreen', {
      command,
      value,
      onChange: this.onChangeSkill,
      onRemove: this.onRemoveSkill
    })
  }

  onAddSkill = (newItem) => {
    const { skill } = this.state
    const index = skill.items.findIndex(item => item.title === newItem.title)
    if (index < 0) {
      skill.items.push(newItem)
      this.onChange(skill)
    }
  }

  onAddPress = () => {
    this.props.navigation.navigate('SetupRobotNewSkillScreen', {
      onAddSkill: this.onAddSkill
    })
  }

  onRemovePress = () => {
    Alert.alert('', 'Are you sure you want to remove?', [
      { text: 'Yes', onPress: () => { this.removeSkillCategory() } },
      { text: 'Cancel', onPress: () => {}, style: 'cancel' }
    ])
  }

  render () {
    const { skill } = this.state
    return (
      <SetupRobotSkillScreen
        skill={skill}
        onSkillPress={this.onSkillPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotSkillContainer)
