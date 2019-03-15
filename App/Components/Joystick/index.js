import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import { Joystick as JoystickThumbstick } from 'joystick-component-lib'

import { Images } from 'App/Themes'

import s from './Styles'

export default class Joystick extends Component {
  static propTypes = {
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func
  }

  render () {
    const {
      style = undefined,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart} = this.props

    return (
      <View style={style}>
        <Image source={Images.joystick.arrows} />
        <View style={s.thumbstickView}>
          <JoystickThumbstick
            length={50}
            shape='circular'
            isSticky
            draggableStyle={s.thumbstick}
            backgroundStyle={s.thumbstickBackground}
            onDraggableMove={onDraggableMove}
            onDraggableRelease={onDraggableRelease}
            onDraggableStart={onDraggableStart} />
        </View>
        <View style={s.thumbstickShadow} />
      </View>
    )
  }
}
