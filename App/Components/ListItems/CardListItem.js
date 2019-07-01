import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity, Button, Icon, IconButton } from 'App/Components'
import { onVideoEnd, onVideoError, onVideoToggle, getImageSize, componentDidMount, componentWillMount } from 'App/Modules'
import s from './Styles'

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

  constructor (props) {
    super(props)
    this.state = {
      paused: true,
      imageWidth: 0,
      imageHeight: 0
    }
  }

  componentDidMount () {
    componentDidMount(this)
  }

  componentWillUnmount () {
    componentWillMount(this)
  }

  getImageSize (imageUri) {
    getImageSize(imageUri)
  }

  onVideoToggle = () => {
    onVideoToggle(this)
  }

  onVideoEnd = () => {
    onVideoEnd(this)
  }

  onVideoError = (e) => {
    onVideoError(e)
  }

  render () {
    const {
      style = undefined,
      image,
      video,
      title,
      text,
      button,
      // loading = false,
      // link,
      onPress = () => {},
      // onLinkPress = () => {},
      buttonIconStyle = {marginTop: 2},
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
          <View style={s.imageView_cardListItem}>
            <Image style={s.image_cardListItem} source={image} />
          </View>
        )}
        {!image && video && (
          // TODO: Kelsey add video styling here
          <Text />
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
