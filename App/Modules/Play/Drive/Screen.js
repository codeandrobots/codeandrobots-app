import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  Footer,
  Joystick,
  Card} from 'App/Components'

import s from './Styles'

export default class Screen extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func
  }

  render () {
    const {
      message,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart
    } = this.props
    return (
      <Container>
        <View style={s.joystickView}>
          <Joystick
            onDraggableMove={onDraggableMove}
            onDraggableRelease={onDraggableRelease}
            onDraggableStart={onDraggableStart} />
        </View>
        <Footer>
          <Card text={message} />
        </Footer>
      </Container>
    )
  }
}
