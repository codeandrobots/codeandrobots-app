import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { TouchableOpacity } from 'App/Components'

import s from './Styles'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { style = undefined, text, onPress } = this.props
    return (
      <View style={style}>
        <TouchableOpacity style={s.button} onPress={onPress}>
          <Text style={s.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
