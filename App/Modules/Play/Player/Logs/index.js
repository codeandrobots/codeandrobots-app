import React, { Component } from 'react'
import { connect } from 'react-redux'

import Socket from 'App/Services/Socket'

import PlayerLogsScreen from './Screen'

export class PlayerLogsContainer extends Component {
  constructor (props) {
    super(props)
    this.socket = Socket.getInstance()
    this.state = {
      isConnected: this.socket.getIsConnected(),
      connection: this.socket.getConnection(),
      logs: []
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.checkSocket()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  checkSocket = () => {
    this.setState({
      isConnected: this.socket.getIsConnected(),
      connection: this.socket.getConnection(),
      logs: this.socket.getLogs()
    })
  }

  render () {
    const { isConnected, connection, logs } = this.state
    return (
      <PlayerLogsScreen
        ref={(ref) => {
          this.screen = ref
        }}
        isConnected={isConnected}
        connection={connection}
        logs={logs}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerLogsContainer)
