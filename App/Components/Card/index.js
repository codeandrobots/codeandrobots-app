import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import QRCode from 'react-native-qrcode-svg'

import { getImageSize } from 'App/Services/ImageUtils'

import { Button, Link, Video } from 'App/Components'

import { Metrics } from 'App/Themes'

import s from './Styles'

export default class Card extends Component {
  static propTypes = {
    qr: PropTypes.string,
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
      style = {},
      qr,
      image,
      video,
      title,
      text,
      button,
      loading = false,
      link,
      textAlign = 'center',
      onPress = () => {},
      onLinkPress = () => {}
    } = this.props

    const { imageWidth, imageHeight } = this.state
    const imageStyle = (imageWidth > 0)
      ? {width: imageWidth, height: imageHeight}
      : undefined

    return (
      <View style={style.view}>
        {qr && (
          <View style={s.qrView}>
            <QRCode
              value={qr}
              size={250} />
          </View>
        )}
        {!qr && image && (
          <View style={s.imageView}>
            <Image style={imageStyle} source={image} />
          </View>
        )}
        {!qr && !image && video && (
          <Video video={video} />
        )}
        {title && (
          <View style={[s.titleView, (textAlign === 'center') ? s.centered : s.titleView_padded, style.titleView]}>
            <Text style={[s.titleText, (textAlign === 'center') ? s.text_center : null]}>{title}</Text>
          </View>
        )}
        {text && (
          <View style={[s.textView, (textAlign === 'center') ? s.centered : s.textView_padded, style.textView]}>
            <Text style={[s.text, (textAlign === 'center') ? s.text_center : null]}>{text}</Text>
          </View>
        )}
        {button && (
          <Button style={{view: [s.centered, style.buttonView]}} loading={loading} text={button} onPress={onPress} />
        )}
        {link && (
          <Link
            style={{view: (button) ? {marginTop: Metrics.unit} : null, text: StyleSheet.flatten(s.link)}}
            text={link}
            centered uppercase={false}
            onPress={onLinkPress} />
        )}
      </View>
    )
  }
}
