import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  Joystick,
  VideoStream,
  PlayerBottomNav,
  Footer,
  Card,
  Modal} from 'App/Components'

import { splitItemsByRow } from 'App/Services/UIUtils'

import s from './Styles'

export default class PortraitScreen extends Component {
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

  renderDefault () {
    const {
      config,
      message,
      showNotConnectedModal,
      onConnect,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart,
      onSliderPress,
      onSkillPress,
      onHideNotConnectedModal
    } = this.props

    const { params, skills, showSkillIcons } = config || {}

    const showPlayerBottomNav =
      config && (params.length > 0 || skills.length > 0)

    // TODO Only one slider supported currently
    const slider = (config && params.length > 0)
      ? {...params[0], labels: params[0].values}
      : null

    const itemsByRow = (skills && skills.length > 0)
      ? splitItemsByRow(skills[0].items, showSkillIcons)
      : []
    const skillRowHeight = (showSkillIcons) ? 40 : 20
    const skillCategoryHeight = (skills && skills.length > 1) ? 40 : 0
    const footerHeight =
      200 + (itemsByRow.length * skillRowHeight) + skillCategoryHeight

    return (
      <Container>
        <View style={[s.joystickView, {marginBottom: footerHeight}]}>
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
            showSkillIcons={showSkillIcons}
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
          onBack={onConnect}
          template='NotConnected' />
      </Container>
    )
  }

  renderWithVideo () {
    const {
      config,
      showNotConnectedModal,
      onConnect,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart,
      onHideNotConnectedModal
    } = this.props

    const { skills, showSkillIcons } = config || {}

    const itemsByRow = (skills && skills.length > 0)
      ? splitItemsByRow(skills[0].items, showSkillIcons)
      : []
    const skillRowHeight = (showSkillIcons) ? 40 : 20
    const skillCategoryHeight = (skills && skills.length > 1) ? 40 : 0
    const footerHeight =
      200 + (itemsByRow.length * skillRowHeight) + skillCategoryHeight

    return (
      <Container style={s.containerView_video}>
        <View style={[s.videoView, {marginBottom: footerHeight}]}>
          <VideoStream />
        </View>
        <Footer>
          <View style={s.center}>
            <Joystick
              theme='light'
              size='small'
              onDraggableMove={onDraggableMove}
              onDraggableRelease={onDraggableRelease}
              onDraggableStart={onDraggableStart} />
          </View>
        </Footer>
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          onBack={onConnect}
          template='NotConnected' />
      </Container>
    )
  }

  render () {
    const { config } = this.props
    if (!config) {
      return null
    }
    if (config.features && config.features.video === true) {
      return this.renderWithVideo()
    } else {
      return this.renderDefault()
    }
  }
}
