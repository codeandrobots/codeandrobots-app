import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import Video from 'react-native-video'

import { getImageSize } from 'App/Services/ImageUtils'

import { TouchableOpacity, Button, Icon, IconButton } from 'App/Components'

import { Colors } from 'App/Themes'

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

  onVideoToggle = () => {
    const { paused } = this.state
    this.setState({ paused: !paused })
  }

  onVideoEnd = (data) => {
    this.setState({ paused: true }, () => {
      this.player.seek(0)
    })
  }

  onVideoError = (e) => {
    console.log(e)
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
    const { paused } = this.state
    const buttonIconColor = (!disabled) ? Colors.icon_dark : Colors.icon_disabled

    return (
      <TouchableOpacity style={itemViewStyle} disabled={disabled} onPress={onPress}>
        {image && (
          <View style={s.imageView_card}>
            <Image style={s.image_card} source={image} />
          </View>
        )}
        {!image && video && (
          <TouchableOpacity style={s.videoView} onPress={this.onVideoToggle}>
            {paused && (
              <IconButton
                style={{ button: StyleSheet.flatten(s.videoButton) }}
                onPress={this.onVideoToggle}>
                <Icon
                  name='play'
                  size={24}
                  style={{ color: Colors.primary }} />
              </IconButton>
            )}
            <Video
              ref={(ref) => { this.player = ref }}
              paused={paused}
              source={video}
              resizeMode='cover'
              ignoreSilentSwitch={'ignore'}
              progressUpdateInterval={100.0}
              onEnd={this.onVideoEnd}
              onError={this.onVideoError}
              style={s.videoPlayer} />
          </TouchableOpacity>
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
