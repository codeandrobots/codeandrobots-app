import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity, Icon } from 'App/Components'

import Types from 'App/Services/PropTypes'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class Instruction extends Component {
  static propTypes = {
    ...Types.instruction,
    onClose: PropTypes.func.isRequired
  }

  render () {
    const {
      style = {},
      type,
      iconSet,
      icon,
      iconSize = 24,
      title,
      onClose } = this.props

    const viewStyle = {}
    switch (type) {
      case 'sensor':
        viewStyle.backgroundColor = Colors.codeLab.sensor
        break
      case 'control':
        viewStyle.backgroundColor = Colors.codeLab.control
        break
      case 'data':
        viewStyle.backgroundColor = Colors.codeLab.data
        break
      case 'action':
        viewStyle.backgroundColor = Colors.codeLab.action
        break
      default:
        viewStyle.backgroundColor = Colors.codeLab.default
    }

    const titleStyle = (type)
      ? [s.title, style.title]
      : [s.title, s.title_default, style.title]

    const rightIconColor = (type)
      ? Colors.whiteTranslucent
      : Colors.primary

    return (
      <View style={[s.view, viewStyle, style.view]}>
        {icon && (
          <Icon set={iconSet} name={icon} size={iconSize} color={Colors.white} style={[s.icon, style.icon]} />
        )}
        <Text style={titleStyle}>{title}</Text>
        <TouchableOpacity onPress={onClose}>
          <Icon
            set='Material'
            name='close'
            size={24}
            color={rightIconColor}
            style={s.close} />
        </TouchableOpacity>
      </View>
    )
  }
}
