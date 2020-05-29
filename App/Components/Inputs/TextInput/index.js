import React, { Component } from 'react'
import { View, Text, TextInput as RNTextInput } from 'react-native'
import PropTypes from 'prop-types'

import s from './Styles'

export default class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    onValueChange: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      focus: false
    }
  }

  onFocus = () => {
    this.setState({ focus: true })
  }

  onBlur = () => {
    this.setState({ focus: false })
  }

  render () {
    const {
      style = undefined,
      label,
      error,
      onValueChange = () => {} } = this.props

    const { focus } = this.state

    const labelStyle = [s.label]
    const inputViewStyle = [s.inputView]
    const helperTextStyle = [s.helperText]
    if (error) {
      labelStyle.push(s.labelError)
      inputViewStyle.push(s.inputViewError)
      helperTextStyle.push(s.helperTextError)
    } else if (focus) {
      labelStyle.push(s.labelFocused)
      inputViewStyle.push(s.inputViewFocused)
    }

    return (
      <View style={[s.view, style]}>
        {label && <Text style={labelStyle}>{label}</Text>}
        <View style={inputViewStyle}>
          <RNTextInput
            style={s.input}
            onChangeText={onValueChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            {...this.props}
          />
        </View>
        {error && <Text style={helperTextStyle}>{error}</Text>}
      </View>
    )
  }
}
