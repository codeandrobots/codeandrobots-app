import React, { Component } from 'react'
import { View } from 'react-native'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'
import PropTypes from 'prop-types'

import s from './Styles'

export default class Draw extends Component {
  static propTypes = {
    strokeColor: PropTypes.string.isRequired,
    strokeWidth: PropTypes.number.isRequired
  }
  render () {
    const {
      strokeColor,
      strokeWidth
    } = this.props
    return (
      <View style={s.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
          />
        </View>
      </View>
    )
  }
}
