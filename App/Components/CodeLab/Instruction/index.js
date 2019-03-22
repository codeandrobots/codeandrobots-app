import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { TouchableOpacity, Icon } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class Instruction extends Component {
  static propTypes = {
    type: PropTypes.string,
    iconSet: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  }

  render () {
    const {
      style = undefined,
      type = 'action',
      iconStyle = undefined,
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
      default:
        viewStyle.backgroundColor = Colors.codeLab.action
    }

    return (
      <View style={[s.view, viewStyle, style]}>
        {icon && (
          <Icon set={iconSet} name={icon} size={iconSize} color={Colors.white} style={[s.icon, iconStyle]} />
        )}
        <Text style={s.title}>{title}</Text>
        <TouchableOpacity onPress={onClose}>
          <Icon
            set='Material'
            name='close'
            size={24}
            color={Colors.white_translucent}
            style={s.close} />
        </TouchableOpacity>
      </View>
    )
  }
}
