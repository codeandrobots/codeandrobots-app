import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import s from './Styles'
import { TouchableOpacity, Button, Icon, IconButton } from 'App/Components'

export default class CardListItem extends Component {
  static PropTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    video: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string,
    loading: PropTypes.bool,
    link: PropTypes.string,
    textAlign: PropTypes.string,
    onPress: PropTypes.func,
    onLinkPress: PropTypes.func
  }
  render () {
    const {
      style = undefined,
      image, // todo image is getting cropped in card
      // video, todo impleemt style for this
      title,
      text,
      button,
      // loading = false,
      // link,
      onPress = () => { },
      // onLinkPress = () => {},
      buttonIconStyle = { marginTop: 2 },
      buttonIconSet,
      buttonIcon = 'chevron-right',
      buttonIconSize = 18,
      disabled = false
    } = this.props

    const itemViewStyle = (!disabled) ? [s.itemView, style] : [s.itemView, s.itemView_disabled, style]
    const textStyle = (!disabled) ? s.text : [s.text, s.text_disabled]

    return (
      <TouchableOpacity style={itemViewStyle} disabled={disabled} onPress={onPress}>
        {image && (
          <View style={s.imageView}>
            <Image style={s.image} source={image} />
          </View>
        )}
        <View style={s.textView}>
          {title && <Text style={textStyle}>{title.toUpperCase()}</Text>}
          {text && <Text style={[textStyle, s.text_medium]}>{text}</Text>}
        </View>
        {button && (
          <View style={s.buttonView}>
            <Button text={button} disabled={disabled} onPress={onPress} />
          </View>
        )}
        {!button && (
          <View style={s.buttonView}>
            <IconButton disabled={disabled} onPress={onPress}>
              <Icon set={buttonIconSet} name={buttonIcon} size={buttonIconSize} disabled={disabled} style={buttonIconStyle} />
            </IconButton>
          </View>
        )}
      </TouchableOpacity>
    )
  }
}
