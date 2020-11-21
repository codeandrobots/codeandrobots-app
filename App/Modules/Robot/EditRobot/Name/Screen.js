import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  TextInput } from 'App/Components'

import s from './Styles'

export default class EditRobotNameScreen extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired
  }

  render () {
    const {
      name,
      onChangeText } = this.props

    return (
      <Container>
        <View style={s.formView}>
          <View style={s.form}>
            <TextInput
              style={s.input}
              name='Robot Name'
              placeholder='Robot Name'
              value={name}
              onChangeText={(value) => { onChangeText('name', value) }}
            />
          </View>
        </View>
      </Container>
    )
  }
}
