import React, { Component } from 'react'
import { connect } from 'react-redux'

import SetupRobotSkillsScreen from './Screen'

export class SetupRobotSkillsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      skills: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    this.setState({skills: state && state.params && state.params.skills})
  }

  onChange = (skills) => {
    const { state } = this.props.navigation
    this.setState({ skills })
    if (state && state.params && state.params.onChange) {
      state.params.onChange({ skills })
    }
  }

  onChangeSkill = (skillToUpdate) => {
    const { skills } = this.state
    const index = skills.findIndex(skill => skill.category === skillToUpdate.category)
    skills[index] = skillToUpdate
    this.onChange(skills)
  }

  onSkillPress = (skill) => {
    this.props.navigation.navigate('SetupRobotSkillScreen', {
      skill,
      onChange: this.onChangeSkill
    })
  }

  onAddSkillCategory = (category) => {
    const { skills } = this.state
    const index = skills.findIndex(skill => skill.category === category)
    if (index < 0) {
      skills.push({category, items: []})
      this.onChange(skills)
    }
  }

  onAddPress = () => {
    this.props.navigation.navigate('SetupRobotNewSkillCategoryScreen', {
      onAddSkillCategory: this.onAddSkillCategory
    })
  }

  render () {
    const { skills } = this.state
    return (
      <SetupRobotSkillsScreen
        skills={skills}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotSkillsContainer)
