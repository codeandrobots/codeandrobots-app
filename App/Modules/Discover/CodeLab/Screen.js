import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  InstructionList,
  CodeLabNav,
  Modal } from 'App/Components'

import Types from 'App/Services/PropTypes'

export default class Screen extends Component {
  static propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.shape({
      ...Types.instruction
    })).isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    onChangeOrder: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onNavPress: PropTypes.func.isRequired,
    onRun: PropTypes.func.isRequired,
    onHideNotConnectedModal: PropTypes.func.isRequired
  }

  render () {
    const {
      instructions,
      showNotConnectedModal,
      onChangeOrder,
      onClose,
      onNavPress,
      onRun,
      onHideNotConnectedModal} = this.props
    return (
      <Container>
        <InstructionList
          instructions={instructions}
          onChangeOrder={onChangeOrder}
          onClose={onClose} />
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          template='NotConnected' />
        <CodeLabNav onPress={onNavPress} onRun={onRun} />
      </Container>
    )
  }
}
