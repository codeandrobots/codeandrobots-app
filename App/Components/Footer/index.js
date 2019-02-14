import React, { Component } from 'react'
import { View } from 'react-native'

import s from './Styles'

export default class Footer extends Component {
  render () {
    const {containerStyle = undefined} = this.props
    return (
      <View style={[s.footer, containerStyle]}>
        {this.props.children}
      </View>
    )
  }
}
