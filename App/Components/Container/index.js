import React, { Component } from 'react'
import { View } from 'react-native'

import s from './Styles'

export default class Container extends Component {
  render () {
    const {containerStyle = undefined} = this.props
    return (
      <View style={[s.container, containerStyle]}>
        {this.props.children}
      </View>
    )
  }
}
