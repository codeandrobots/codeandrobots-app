import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import { TouchableOpacity, Button, Icon, IconButton } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class ListItem extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    icon: PropTypes.string,
    iconSet: PropTypes.string,
    iconSize: PropTypes.number,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    button: PropTypes.string,
    format: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  renderDefault () {
    const { style = undefined, iconStyle = undefined, image, iconSet, icon, title, text, button, disabled = false, onPress } = this.props

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

  renderSquare () {
    const { style = undefined, iconStyle = undefined, image, iconSet, icon, title, text, button, disabled = false, onPress } = this.props

    const itemViewStyle = (!disabled) ? [s.itemView, s.itemView_square, style] : [s.itemView, s.itemView_square, s.itemView_disabled, style]
    const textStyle = (!disabled) ? s.text : [s.text, s.text_disabled]

    return (
      <TouchableOpacity style={itemViewStyle} disabled={disabled} onPress={onPress}>
        <View style={[s.textView, s.textView_square]}>
          <Text style={textStyle}>{title.toUpperCase()}</Text>
          <Text style={textStyle}>{text}</Text>
        </View>
        {button && (
          <View style={[s.buttonView, s.buttonView_square]}>
            <Button text={button} disabled={disabled} onPress={onPress} />
          </View>
        )}
        {!button && image && (
          <View style={[s.imageView, s.imageView_square]}>
            <Image style={s.image} source={image} />
          </View>
        )}
        {!button && !image && icon && (
          <View style={[s.buttonView, s.buttonView_square]}>
            <IconButton disabled={disabled} onPress={onPress}>
              <Icon set={iconSet} name={icon} disabled={disabled} style={iconStyle} />
            </IconButton>
          </View>
        )}
        {!button && !image && !icon && (
          <View style={[s.buttonView, s.buttonView_square]}>
            <IconButton disabled={disabled} onPress={onPress}>
              <Icon name='chevron-right' disabled={disabled} style={{marginTop: 2}} />
            </IconButton>
          </View>
        )}
      </TouchableOpacity>
    )
  }

  renderCompact () {
    const { style = undefined, iconStyle = undefined, image, iconSet, icon, title, disabled = false, onPress } = this.props

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
            <Icon set={iconSet} name={icon} size={24} color={primaryButtonIconColor} style={iconStyle} />
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

  render () {
    const { format = 'default' } = this.props
    switch (format) {
      case 'square':
        return this.renderSquare()
      case 'compact':
        return this.renderCompact()
      default:
        return this.renderDefault()
    }
  }
}
