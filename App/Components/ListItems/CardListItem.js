import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import { getImageSize, scaleImageSize } from 'App/Services/ImageUtils'

import { TouchableOpacity, Button, Icon, Video } from 'App/Components'

import { Colors, Metrics } from 'App/Themes'

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
    this.getAndSetImageSize(this.props.image)
  }

  async componentWillReceiveProps (nextProps) {
    if (nextProps.image && this.props.image && nextProps.image.uri !== this.props.image.uri) {
      this.getAndSetImageSize(nextProps.image)
    }
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  getAndSetImageSize = async (image) => {
    if (image && image.uri) {
      const { width, height } = await getImageSize(image.uri)
      if (this._isMounted) {
        this.setState({ imageWidth: width, imageHeight: height })
      }
    }
  }

  render () {
    const { imageWidth, imageHeight } = this.state
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

    // maxWidth and maxHeight must match Styles.customImageContainer_card
    const maxWidth = 118
    const maxHeight = 80
    const paddingOffset = Metrics.unit
    const { width, height } = scaleImageSize(
      imageWidth,
      imageHeight,
      maxWidth - paddingOffset,
      maxHeight - paddingOffset
    )
    const isCustomImage = (image && image instanceof Object && image.uri)

    return (
      <TouchableOpacity style={itemViewStyle} disabled={disabled} onPress={onPress}>
        {image && !isCustomImage && (
          <View style={s.imageView_card}>
            <Image style={s.image_card} source={image} />
          </View>
        )}
        {image && isCustomImage && (
          <View style={s.customImageContainer_card}>
            {width > 0 && (
              <View style={[s.customImageView_card, {width: maxWidth, height: maxHeight}]}>
                <Image
                  style={[
                    s.customImage_card,
                    {width: width - 9, height: height - 9}
                  ]}
                  source={image} />
              </View>
            )}
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
