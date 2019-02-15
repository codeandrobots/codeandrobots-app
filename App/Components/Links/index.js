import React, { Component } from 'react'
import { View } from 'react-native'

import s from './Styles'

export { default as Link } from './Link'

export class Links extends Component {
  render () {
    const { style = undefined } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { style: s.link })
    })
    return (
      <View style={style}>
        {children}
      </View>
    )
  }
}
