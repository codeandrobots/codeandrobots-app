import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Container, TextInput } from 'App/Components'

import s from './Styles'

export default class SetupRobotNewSkillCategoryScreen extends Component {
  static propTypes = {
    category: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  render () {
    const { category, onChange } = this.props
    return (
      <Container>
        <View style={s.formView}>
          <Text style={s.formTitle}>Category</Text>
          <View style={s.form}>
            <TextInput
              style={s.input}
              name={category}
              value={category}
              onChangeText={(changedCategory) => { onChange(changedCategory) }}
            />
          </View>
        </View>
      </Container>
    )
  }
}
