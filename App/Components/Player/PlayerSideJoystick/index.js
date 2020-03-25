import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Joystick } from 'App/Components'

import s from './Styles'

export default class PlayerSideJoystick extends Component {
  static propTypes = {
    side: PropTypes.string,
    title: PropTypes.string,
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func
  }

  render () {
    const {
      style = undefined,
      side = 'left',
      title,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart } = this.props

    const sideNavView = side === 'right' ? s.rightNavView : s.leftNavView

    return (
      <View style={[s.navView, sideNavView, style]}>
        {title &&
          <View style={s.navHeader}>
            <Text style={s.navTitle}>{title}</Text>
          </View>
        }
        <View style={s.center}>
          <Joystick
            theme='light'
            size='small'
            onDraggableMove={onDraggableMove}
            onDraggableRelease={onDraggableRelease}
            onDraggableStart={onDraggableStart} />
        </View>
      </View>
    )
  }
}
