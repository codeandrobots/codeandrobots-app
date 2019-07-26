import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  Joystick,
  PlayerBottomNav,
  Footer,
  Card,
  Modal} from 'App/Components'

import s from './Styles'

export default class Screen extends Component {
  static propTypes = {
    config: PropTypes.any,
    message: PropTypes.string.isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func,
    onSliderPress: PropTypes.func.isRequired,
    onSkillPress: PropTypes.func.isRequired,
    onHideNotConnectedModal: PropTypes.func.isRequired
  }

  render () {
    const {
      config,
      message,
      showNotConnectedModal,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart,
      onSliderPress,
      onSkillPress,
      onHideNotConnectedModal
    } = this.props

    const { params, skills } = config || {}

    const showPlayerBottomNav =
      config && (params.length > 0 || skills.length > 0)

    // TODO Only one slider supported currently
    const slider = (config && params.length > 0)
      ? {...params[0], labels: params[0].values}
      : null

    return (
      <Container>
        <View style={s.joystickView}>
          <Joystick
            onDraggableMove={onDraggableMove}
            onDraggableRelease={onDraggableRelease}
            onDraggableStart={onDraggableStart} />
        </View>
        { showPlayerBottomNav &&
          <PlayerBottomNav
            theme='light'
            slider={slider}
            skills={skills}
            onSliderPress={onSliderPress}
            onSkillPress={onSkillPress} />
        }
        { !showPlayerBottomNav &&
          <Footer>
            <Card text={message} />
          </Footer>
        }
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          template='NotConnected' />
      </Container>
    )
  }
}
