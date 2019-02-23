import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity, Button, Icon, IconButton } from 'App/Components'

import s from './Styles'

export default class DefaultListItem extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    icon: PropTypes.string,
    iconSet: PropTypes.string,
    iconSize: PropTypes.number,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    button: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      style = undefined,
      iconStyle = undefined,
      image, iconSet,
      icon,
      title,
      text,
      button,
      disabled = false,
      onPress } = this.props

    const itemViewStyle = (!disabled) ? [s.itemView, style] : [s.itemView, s.itemView_disabled, style]
    const textStyle = (!disabled) ? s.text : [s.text, s.text_disabled]

    return (
      <TouchableOpacity style={itemViewStyle} disabled={disabled} onPress={onPress}>
        {image && (
          <View style={s.imageView}>
            <Image style={s.image} source={image} />
          </View>
        )}
        {!image && icon && (
          <View style={s.imageView}>
            <Icon set={iconSet} name={icon} size={48} disabled={disabled} style={iconStyle} />
          </View>
        )}
        <View style={s.textView}>
          <Text style={textStyle}>{title.toUpperCase()}</Text>
          <Text style={textStyle}>{text}</Text>
        </View>
        {button && (
          <View style={s.buttonView}>
            <Button text={button} disabled={disabled} onPress={onPress} />
          </View>
        )}
        {!button && (
          <View style={s.buttonView}>
            <IconButton disabled={disabled} onPress={onPress}>
              <Icon name='chevron-right' disabled={disabled} style={{marginTop: 2}} />
            </IconButton>
          </View>
        )}
      </TouchableOpacity>
    )
  }
}
