import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity, Icon } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class OptionListItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    selected: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      style = undefined,
      title,
      value,
      selected = false,
      onPress } = this.props

    return (
      <TouchableOpacity style={[s.row, style]} onPress={() => { onPress(value) }}>
        <View style={[s.buttonView, s.buttonView_compact]}>
          {selected && <Icon name='check-circle' set='Material' color={Colors.primary} size={24} />}
          {!selected && <Icon name='circle-outline' set='Material' color={Colors.lightgrey} size={24} />}
        </View>
        <View style={[s.itemView, s.itemView_compact]}>
          <View style={[s.textView, s.textView_compact]}>
            <Text style={s.text}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
