import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, View, Button, Text } from 'react-native'

import { TouchableOpacity } from 'App/Components/Touchable'

import s from './Styles'

export default class NavButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string
  }

  render () {
    const { text, onPress } = this.props
    if (Platform.OS === 'ios') {
      return (
        <Button title={text} onPress={onPress} />
      )
    } else {
      return (
        <View style={s.view}>
          <TouchableOpacity style={s.button} onPress={onPress}>
            <Text style={s.text}>{text}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
