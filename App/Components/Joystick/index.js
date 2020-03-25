import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import { Joystick as JoystickThumbstick } from 'joystick-component-lib'

import { Images } from 'App/Themes'

import styles, { stylesLightAndSmall } from './Styles'

export default class Joystick extends Component {
  static propTypes = {
    theme: PropTypes.string,
    size: PropTypes.string,
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func
  }

  copy = (touch) => {
    // Note: Creating shallow copy of touch since it might be updated
    // by the joystick lib as the rest of the app logic is happening
    return Object.assign({}, touch)
  }

  render () {
    const {
      style = undefined,
      theme = 'default',
      size = 'large',
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart} = this.props

    const lightThemeAndSmallSize = theme === 'light' && size === 'small'

    const s = lightThemeAndSmallSize ? stylesLightAndSmall : styles
    const arrowsImage = lightThemeAndSmallSize
      ? Images.joystick.arrows_white_small : Images.joystick.arrows
    const thumbstickPoint = lightThemeAndSmallSize ? 60 : 80
    const thumbstickLength = lightThemeAndSmallSize ? 40 : 50

    return (
      <View style={style}>
        <Image source={arrowsImage} />
        <View style={s.thumbstickView}>
          <JoystickThumbstick
            neutralPointX={thumbstickPoint}
            neutralPointY={thumbstickPoint}
            length={thumbstickLength}
            shape='circular'
            isSticky
            draggableStyle={s.thumbstick}
            backgroundStyle={s.thumbstickBackground}
            onDraggableMove={
              (touch) => {
                if (onDraggableMove) {
                  onDraggableMove(this.copy(touch))
                }
              }
            }
            onDraggableRelease={
              (touch) => {
                if (onDraggableRelease) {
                  onDraggableRelease(this.copy(touch))
                }
              }
            }
            onDraggableStart={onDraggableStart} />
        </View>
        <View style={s.thumbstickShadow} />
      </View>
    )
  }
}
