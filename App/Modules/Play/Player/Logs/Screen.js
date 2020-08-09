import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import uuid from 'react-native-uuid'

import PropTypes from 'prop-types'

export default class PlayerLogsScreen extends Component {
  static propTypes = {
    isConnected: PropTypes.bool.isRequired,
    connection: PropTypes.shape({
      host: PropTypes.string.isRequired,
      port: PropTypes.number.isRequired
    }).isRequired,
    logs: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render () {
    const { isConnected, connection, logs } = this.props
    return (
      <ScrollView>
        <Text>Connection: {connection.host}:{connection.port}</Text>
        <Text>Connected: {isConnected ? 'Yes' : 'No'}</Text>
        <Text>----------------</Text>
        {logs.map(log => <Text key={uuid.v4()}>{log}</Text>)}
      </ScrollView>
    )
  }
}
