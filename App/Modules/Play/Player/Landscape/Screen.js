import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  PlayerCenterNav,
  PlayerSideParams,
  PlayerSideJoystick,
  Modal} from 'App/Components'

import s from './Styles'

export default class LandscapeScreen extends Component {
  static propTypes = {
    config: PropTypes.any,
    message: PropTypes.string.isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    onConnect: PropTypes.func,
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
      showNotConnectedModal,
      onConnect,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart,
      onSliderPress,
      onSkillPress,
      onHideNotConnectedModal
    } = this.props

    const { params } = config || {}

    // TODO Only one slider supported currently
    const slider = (config && params.length > 0)
      ? {...params[0], labels: params[0].values}
      : null

    return (
      <Container>
        <View style={s.view}>
          {slider &&
            <PlayerSideParams
              {...slider}
              onPress={onSliderPress} />
          }
          <PlayerCenterNav
            theme='primary'
            config={config}
            onSkillPress={onSkillPress} />
          <PlayerSideJoystick
            side='right'
            onDraggableMove={onDraggableMove}
            onDraggableRelease={onDraggableRelease}
            onDraggableStart={onDraggableStart} />
        </View>
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          onBack={onConnect}
          template='NotConnected' />
      </Container>
    )
  }
}
