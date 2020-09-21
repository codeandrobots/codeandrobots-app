import React, { Component } from 'react'
import { connect } from 'react-redux'

import SetupRobotSkillScreen from './Screen'

export class SetupRobotSkillContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      skill: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    const skill = state && state.params && state.params.skill
    this.setState({ skill })
    if (skill && skill.category) {
      this.props.navigation.setParams({title: skill.category})
    }
  }

  onChange = (skill) => {
    const { state } = this.props.navigation
    this.setState({ skill })
    if (state && state.params && state.params.onChange) {
      state.params.onChange(skill)
    }
  }

  onChangeSkill = (command, value) => {
    const { skill } = this.state
    const index = skill.items.findIndex(item => item.title === command)
    skill.items[index] = {title: command, cmd: value}
    this.onChange(skill)
  }

  onSkillPress = (command, value) => {
    this.props.navigation.navigate('SetupRobotUpdateSkillScreen', {
      command,
      value,
      onChange: this.onChangeSkill
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
