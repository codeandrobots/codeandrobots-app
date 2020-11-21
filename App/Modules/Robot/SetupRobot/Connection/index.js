import React, { Component } from 'react'
import { connect } from 'react-redux'

import SetupRobotConnectionScreen from './Screen'

export class SetupRobotConnectionContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      connection: null
    }
  }

  componentWillMount () {
    const { state } = this.props.navigation
    this.setState({connection: state && state.params && state.params.connection})
  }

  onChange = (connection) => {
    const { state } = this.props.navigation
    this.setState({ connection })
    if (state && state.params && state.params.onChange) {
      state.params.onChange({ connection })
    }
  }

  render () {
    const { connection } = this.state
    return (
      <SetupRobotConnectionScreen
        connection={connection}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetupRobotConnectionContainer)
