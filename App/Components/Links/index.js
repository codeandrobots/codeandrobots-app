import React, { Component } from 'react'
import { View } from 'react-native'

import Link from './Link'

import s from './Styles'

class Links extends Component {
  render () {
    const { containerStyle = undefined } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        containerStyle: s.link
      })
    })
    return (
      <View style={containerStyle}>
        {children}
      </View>
    )
  }
}

export {
  Links,
  Link
}
