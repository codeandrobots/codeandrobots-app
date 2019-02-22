import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

import { TouchableOpacity } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class Setting extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
  }
  render () {
    const {text, onPress} = this.props
    return (
      <TouchableOpacity style={s.settingView} onPress={onPress}>
        <View style={s.textView}>
          <Text style={s.text}>{text}</Text>
        </View>
        <SimpleLineIcon
          name='arrow-right'
          color={Colors.icon_dark}
          size={16} />
      </TouchableOpacity>
    )
  }
}
