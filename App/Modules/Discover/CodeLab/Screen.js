import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  InstructionList,
  CodeLabNav } from 'App/Components'

import Types from 'App/Services/PropTypes'

export default class Screen extends Component {
  static propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.shape({
      ...Types.instruction
    })).isRequired,
    onChangeOrder: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onNavPress: PropTypes.func.isRequired,
    onRun: PropTypes.func.isRequired
  }

  render () {
    const {
      instructions,
      onChangeOrder,
      onClose,
      onNavPress,
      onRun } = this.props
    return (
      <Container>
        <InstructionList
          instructions={instructions}
          onChangeOrder={onChangeOrder}
          onClose={onClose} />
        <CodeLabNav onPress={onNavPress} onRun={onRun} />
      </Container>
    )
  }
}
