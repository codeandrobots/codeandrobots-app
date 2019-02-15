import React, { Component } from 'react'
import { View } from 'react-native'

import { StyleSheet as s } from 'App/Themes'

export default class Footer extends Component {
  render () {
    const {style = undefined} = this.props
    return (
      <View style={[s.footer, style]}>
        {this.props.children}
      </View>
    )
  }
}
