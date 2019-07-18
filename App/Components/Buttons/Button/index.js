import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { TouchableOpacity, LoadingIndicator } from 'App/Components'

import s from './Styles'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      style = {},
      text,
      disabled = false,
      loading = false,
      onPress } = this.props

    const textStyle = (!disabled)
      ? (style.text) ? [s.text, style.text] : s.text
      : (style.text) ? [s.text, s.text_disabled, style.text] : [s.text, s.text_disabled]
    const buttonStyle = (!disabled)
      ? (style.button) ? [s.button, style.button] : s.button
      : (style.button) ? [s.button, s.button_disabled, style.button] : [s.button, s.button_disabled]

    return (
      <View style={style.view}>
        <TouchableOpacity style={buttonStyle} disabled={disabled || loading} onPress={onPress}>
          {!loading && <Text style={textStyle}>{text}</Text>}
          {loading && <LoadingIndicator style={{marginVertical: 2}} />}
        </TouchableOpacity>
      </View>
    )
  }
}
