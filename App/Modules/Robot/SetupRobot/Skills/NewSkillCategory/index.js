import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import SetupRobotNewSkillCategoryScreen from './Screen'

export class SetupRobotNewSkillCategoryContainer extends Component {
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
      category: null
    }
  }

  componentWillMount () {
    const headerRight = <NavButton onPress={this.onAddPress} text='Add' />
    this.props.navigation.setParams({ headerRight })
  }

  onChange = (category) => {
    this.setState({ category })
  }

  onAddPress = () => {
    const { category } = this.state
    if (category.trim().length < 1) {
      return
    }
    const { state } = this.props.navigation
    if (state && state.params && state.params.onAddSkillCategory) {
      state.params.onAddSkillCategory(category)
    }
    this.props.navigation.goBack()
  }

  render () {
    const { category } = this.state
    return (
      <SetupRobotNewSkillCategoryScreen
        category={category}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotNewSkillCategoryContainer)
