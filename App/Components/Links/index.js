import React, { Component } from 'react'
import { View } from 'react-native'

import s from './Styles'

export { default as Link } from './Link'

export class Links extends Component {
  render () {
    const { style = {} } = this.props
    const children = React.Children.map(this.props.children, child => {
      const style = {
        view: {
          ...s.link
        },
        ...child.props.style
      }
      return React.cloneElement(child, { style })
    })
    return (
      <View style={style.view}>
        {children}
      </View>
    )
  }
}
