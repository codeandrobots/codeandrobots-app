import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import Button from '../Button'

import styles, { stylesLight, stylesPrimary } from './Styles'

export default class PlayerButton extends Component {
  static propTypes = {
    theme: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    disabled: PropTypes.bool,
    onPress: PropTypes.func
  }

  render () {
    const {
      theme = 'default',
      style = {},
      size = 'default',
      text = ' ',
      image,
      disabled = false,
      onPress = () => {} } = this.props
    const s = (theme === 'light')
      ? stylesLight
      : (theme === 'primary')
        ? stylesPrimary
        : styles
    const opacity = (disabled) ? 0.5 : 1
    return (
      <View style={[{ opacity }, style]}>
        <Button
          style={s}
          size={size}
          text={text}
          image={image}
          disabled={disabled}
          onPress={onPress} />
      </View>
    )
  }
}
