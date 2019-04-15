import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Types from 'App/Services/PropTypes'

import {
  Container,
  List,
  SquareListItem,
  Modal} from 'App/Components'

export default class Screen extends Component {
  static propTypes = {
    sounds: PropTypes.arrayOf(Types.sound).isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    onPlay: PropTypes.func.isRequired,
    onHideNotConnectedModal: PropTypes.func.isRequired
  }

  render () {
    const {
      sounds,
      showNotConnectedModal,
      onPlay,
      onHideNotConnectedModal
    } = this.props
    return (
      <Container>
        <List cols={2} scrollable>
          {sounds.map(sound => {
            return (
              <SquareListItem
                key={sound.key}
                icon='play'
                iconStyle={{marginLeft: 4}}
                title={sound.name}
                onPress={() => { onPlay(sound) }} />
            )
          })}
        </List>
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          template='NotConnected' />
      </Container>
    )
  }
}
