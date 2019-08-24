import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import { getImageSize } from 'App/Services/ImageUtils'

import { TouchableOpacity, Button, Icon, Video } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class CardListItem extends Component {
  static propTypes = {
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

  async componentDidMount () {
    this._isMounted = true
    const { image } = this.props
    if (image && image.uri) {
      const { width, height } = await getImageSize(image.uri)
      if (this._isMounted) {
        this.setState({ imageWidth: width, imageHeight: height })
      }
    }
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    const {
      style = undefined,
      image,
      video,
      title,
      text,
      button,
      onPress = () => {},
      disabled = false
    } = this.props

    const itemViewStyle = (!disabled) ? [s.itemView_card, style] : [s.itemView_card, s.itemView_disabled, style]
    const textStyle = (!disabled) ? s.text_card : [s.text_card, s.text_disabled]
    const titleStyle = (!disabled) ? s.title_card : [s.title_card, s.text_disabled]
    const buttonIconColor = (!disabled) ? Colors.icon_dark : Colors.icon_disabled

    return (
      <TouchableOpacity style={itemViewStyle} disabled={disabled} onPress={onPress}>
        {image && (
          <View style={s.imageView_card}>
            <Image style={s.image_card} source={image} />
          </View>
        )}
        {!image && video && (
          <View style={s.videoView_card}>
            <Video video={video} size='small' />
          </View>
        )}
        <View style={s.textView_card}>
          {title && <Text style={titleStyle}>{title}</Text>}
          {text && <Text style={[textStyle, s.text_medium]}>{text}</Text>}
        </View>
        {button && (
          <View style={s.buttonView}>
            <Button text={button} disabled={disabled} onPress={onPress} />
          </View>
        )}
        {!button && (
          <View style={s.buttonView}>
            <Icon set='SimpleLine' name='arrow-right' size={16} color={buttonIconColor} />
          </View>
        )}
      </TouchableOpacity>
    )
  }
}
