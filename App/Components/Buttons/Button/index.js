import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { TouchableOpacity } from 'App/Components'

import s from './Styles'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { style = undefined, text, disabled = false, onPress } = this.props

    const textStyle = (!disabled) ? s.text : [s.text, s.text_disabled]
    const buttonStyle = (!disabled) ? s.button : [s.button, s.button_disabled]

    return (
      <View style={style}>
        <TouchableOpacity style={buttonStyle} disabled={disabled} onPress={onPress}>
          <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
