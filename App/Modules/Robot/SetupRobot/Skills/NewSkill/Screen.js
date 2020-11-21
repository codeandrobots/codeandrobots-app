import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Container, TextInput } from 'App/Components'

import s from './Styles'

export default class SetupRobotNewSkillScreen extends Component {
  static propTypes = {
    command: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  render () {
    const { command, value, onChange } = this.props
    return (
      <Container>
        <View style={s.formView}>
          <Text style={s.formTitle}>Name</Text>
          <View style={s.form}>
            <TextInput
              style={s.input}
              name={command}
              value={command}
              onChangeText={(changedCommand) => { onChange(changedCommand, value) }}
            />
            <Text style={s.formTitle}>Bluetooth command</Text>
            <TextInput
              style={s.input}
              name={value}
              value={value}
              onChangeText={(changedValue) => { onChange(command, changedValue) }}
            />
          </View>
        </View>
      </Container>
    )
  }
}
