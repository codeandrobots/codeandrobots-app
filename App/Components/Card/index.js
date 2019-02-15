import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Button } from 'App/Components'

import s from './Styles'

export default class Card extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string,
    onPress: PropTypes.func
  }
  render () {
    const {image, title, text, button, onPress = () => {}, style = {}} = this.props
    return (
      <View>
        {image && (
          <View style={[s.imageView, style.imageView]}>
            <Image source={image} />
          </View>
        )}
        {title && (
          <View style={[s.titleView, style.titleView]}>
            <Text style={s.title}>{title}</Text>
          </View>
        )}
        {text && (
          <View style={[s.textView, style.textView]}>
            <Text style={s.text}>{text}</Text>
          </View>
        )}
        {button && (
          <Button style={[s.centered, style.buttonView]} text={button} onPress={onPress} />
        )}
      </View>
    )
  }
}
