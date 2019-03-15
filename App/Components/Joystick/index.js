import React, { Component } from 'react'
import { View, Image } from 'react-native'

import { Images } from 'App/Themes'

import s from './Styles'

export default class Joystick extends Component {
  render () {
    const { style = undefined } = this.props

    return (
      <View style={style}>
        <Image source={Images.joystick.arrows} />
        <View style={s.thumbstick} />
      </View>
    )
  }
}
