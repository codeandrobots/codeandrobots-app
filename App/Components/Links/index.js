import React, { Component } from 'react'
import { View } from 'react-native'

import s from './Styles'

export { default as Link } from './Link'

export class Links extends Component {
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
