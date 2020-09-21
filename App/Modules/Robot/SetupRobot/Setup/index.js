import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'
import { RobotsActions } from 'App/Modules/Robot'
import SetupRobotScreen from './Screen'
import defaultConfig from './config'

export class SetupRobotContainer extends Component {
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
      setup: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    const config = state && state.params && state.params.config
    this.setState({
      setup: {
        ...JSON.parse(JSON.stringify(defaultConfig)),
        ...config
      }
    })

    const headerRight = <NavButton onPress={this.onDonePress} text='Done' />
    this.props.navigation.setParams({ headerRight })
  }

  onDonePress = () => {
    const { setup } = this.state
    this.props.addRobot({
      id: 'test', // TODO fix
      ...setup
    })

    const { state } = this.props.navigation
    const goBackOnDone = state && state.params && state.params.goBackOnDone
    if (goBackOnDone) {
      this.props.navigation.goBack()
    } else {
      // TODO fix, after which robot then navigate to connect screen
      this.props.navigation.navigate('WhichRobotScreen', { hideBack: true })
    }
  }

  onChange = (setupChanges) => {
    this.setState({
      setup: { ...this.state.setup, ...setupChanges }
    })
  }

  onConnectionPress = () => {
    const { setup: { connection } } = this.state
    this.props.navigation.navigate('SetupRobotConnectionScreen', {
      connection,
      onChange: this.onChange
    })
  }

  onMovesPress = () => {
    const { setup: { commands } } = this.state
    this.props.navigation.navigate('SetupRobotMovesScreen', {
      commands,
      onChange: this.onChange
    })
  }

  onSkillsPress = () => {
    const { setup: { skills } } = this.state
    this.props.navigation.navigate('SetupRobotSkillsScreen', {
      skills,
      onChange: this.onChange
    })
  }

  render () {
    const { setup } = this.state
    return (
      <SetupRobotScreen
        setup={setup}
        onConnectionPress={this.onConnectionPress}
        onMovesPress={this.onMovesPress}
        onSkillsPress={this.onSkillsPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotContainer)
