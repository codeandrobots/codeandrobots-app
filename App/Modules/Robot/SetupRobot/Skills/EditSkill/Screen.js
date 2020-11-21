import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Container, TextInput } from 'App/Components'
import { capitalizeFirstLetter } from 'App/Services/TextUtils'

import s from './Styles'

export default class SetupRobotEditSkillScreen extends Component {
  static propTypes = {
    command: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  render () {
    const { command, value, onChange } = this.props
    return (
      <Container>
        <View style={s.formView}>
          <Text style={s.formTitle}>{capitalizeFirstLetter(command)} Bluetooth command</Text>
          <View style={s.form}>
            <TextInput
              style={s.input}
              name={capitalizeFirstLetter(command)}
              value={value}
              onChangeText={(value) => { onChange(command, value) }}
            />
          </View>
        </View>
      </Container>
    )
  }
}
