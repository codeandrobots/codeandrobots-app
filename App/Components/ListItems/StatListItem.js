import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Icon } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class SquareListItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    iconSet: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }

  render () {
    const {
      style = undefined,
      iconStyle = undefined,
      icon,
      iconSet,
      iconSize = 24,
      iconColor = Colors.icon_dark,
      title,
      value } = this.props

    return (
      <View style={[s.itemView, s.itemView_stat, style]}>
        <View style={[s.statView]}>
          {icon && (
            <Icon set={iconSet} name={icon} size={iconSize} color={iconColor} style={iconStyle} />
          )}
          <View style={[s.stat]}>
            <Text style={s.statValue}>{value}</Text>
            <Text style={s.statTitle}>{title}</Text>
          </View>
        </View>
      </View>
    )
  }
}
