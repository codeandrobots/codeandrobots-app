import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'

import uuid from 'react-native-uuid'

import s from './Styles'

export default class List extends Component {
  static propTypes = {
    title: PropTypes.string,
    cols: PropTypes.number,
    scrollable: PropTypes.bool
  }

  render () {
    const { style = undefined, cols = 1, title, scrollable = false } = this.props

    const rowStyle = (cols === 1) ? {flex: 1} : undefined

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {style: rowStyle})
    })

    var rows = []
    while (children.length > 0) {
      rows.push(children.splice(0, cols))
    }

    const ListView = (scrollable) ? ScrollView : View

    return (
      <ListView style={[s.listView, style]}>
        {title && (
          <Text style={s.title}>{title}</Text>
        )}
        {rows.map((row) => {
          return (
            <View key={uuid.v4()} style={s.row}>{row}</View>
          )
        })}
      </ListView>
    )
  }
}
