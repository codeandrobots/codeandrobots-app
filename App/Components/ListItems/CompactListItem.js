import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import { TouchableOpacity, Icon } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class DefaultListItem extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    iconSet: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      style = undefined,
      iconStyle = undefined,
      image,
      iconSet,
      icon,
      iconSize = 24,
      title,
      disabled = false,
      onPress } = this.props

    const textStyle = (!disabled) ? s.text : [s.text, s.text_disabled]
    const primaryButtonIconColor = (!disabled) ? Colors.icon_primary : Colors.icon_disabled
    const buttonIconColor = (!disabled) ? Colors.icon_dark : Colors.icon_disabled

    return (
      <TouchableOpacity style={s.row} disabled={disabled} onPress={onPress}>
        {image && (
          <View style={[s.imageView, s.imageView_compact]}>
            <Image style={[s.image, s.image_compact]} source={image} />
          </View>
        )}
        {!image && icon && (
          <View style={[s.buttonView, s.buttonView_compact]}>
            <Icon set={iconSet} name={icon} size={iconSize} color={primaryButtonIconColor} style={iconStyle} />
          </View>
        )}
        <View style={[s.itemView, s.itemView_compact, style]}>
          <View style={[s.textView, s.textView_compact]}>
            <Text style={textStyle}>{title}</Text>
          </View>
          <Icon set='SimpleLine' name='arrow-right' size={16} color={buttonIconColor} />
        </View>
      </TouchableOpacity>
    )
  }
}
