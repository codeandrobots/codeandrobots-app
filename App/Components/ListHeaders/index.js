import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import s from './Styles'

export default class ListHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    completed: PropTypes.number
  }

  render () {
    const {
      style = undefined,
      title,
      count,
      completed } = this.props

    const progress = (count != null && completed != null)
      ? (count > 0 && completed > 0) ? completed / count : 0
      : 1

    return (
      <View style={[s.listHeaderView, style]}>
        <View style={s.listHeader}>
          <Text style={s.title}>{title.toUpperCase()}</Text>
          {count && completed === null && (
            <Text style={s.text}>{count}</Text>
          )}
          {count && completed !== null && (
            <Text style={s.text}>{`${completed}/${count} COMPLETE`}</Text>
          )}
        </View>
        <View style={s.bottomBorder}>
          <View style={[s.bottomBorderLeft, {flex: progress}]} />
          <View style={[s.bottomBorderRight, {flex: (1 - progress)}]} />
        </View>
      </View>
    )
  }
}
