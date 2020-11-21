import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Container, List, ListHeader, OptionListItem } from 'App/Components'

import s from './Styles'

export default class SetupRobotConnectionScreen extends Component {
  static propTypes = {
    connection: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onNewLineChange = (value) => {
    const { connection, onChange } = this.props
    onChange({
      ...connection,
      settings: {
        ...connection.settings,
        newLine: value
      }
    })
  }

  render () {
    const { connection } = this.props
    const includeNewLine = !!connection.settings && connection.settings.newLine
    return (
      <Container>
        <List>
          <ListHeader title='Bluetooth' />
          <OptionListItem
            title='Include new line'
            value={!includeNewLine}
            selected={includeNewLine}
            onPress={this.onNewLineChange} />
        </List>
        <View style={s.view}>
          <Text style={s.text}>Wifi support coming soon</Text>
        </View>
      </Container>
    )
  }
}
