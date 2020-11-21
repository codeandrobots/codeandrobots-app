import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  TextInput } from 'App/Components'

import s from './Styles'

export default class EditRobotDescriptionScreen extends Component {
  static propTypes = {
    description: PropTypes.string,
    onChangeText: PropTypes.func.isRequired
  }

  render () {
    const {
      description,
      onChangeText } = this.props

    return (
      <Container>
        <View style={s.formView}>
          <View style={s.form}>
            <TextInput
              style={s.input}
              name='Robot Description'
              placeholder='Robot Description'
              value={description}
              multiline
              numberOfLines={3}
              onChangeText={(value) => { onChangeText('description', value) }}
            />
          </View>
        </View>
      </Container>
    )
  }
}
