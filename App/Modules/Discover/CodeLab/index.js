import React, { Component } from 'react'
import { connect } from 'react-redux'

import uuid from 'react-native-uuid'

import Screen from './Screen'

export class CodeLabContainer extends Component {
  constructor (props) {
    super(props)
    this.order = null
    this.state = {
      instructions: []
    }
  }

  sortInstructions = () => {
    if (!this.order) {
      return this.state.instructions
    }
    const instructions = []
    for (var i = 0; i < this.order.length; i++) {
      const next = this.order[i]
      instructions.push(this.state.instructions[next])
    }

    // reset order now that instructions have been sorted
    this.order = null

    return instructions
  }

  onChangeOrder = (order) => {
    this.order = order
  }

  onClose = (instructionToRemove) => {
    const instructions = this.sortInstructions().filter(
      (instruction) => instruction.key !== instructionToRemove.key
    )
    this.setState({ instructions })
  }

  onNavPress = (instruction) => {
    const instructions = this.sortInstructions()
    instructions.push({...instruction, key: instruction.key + '-' + uuid.v4()})
    this.setState({ instructions })
  }

  onRun = () => {
    // TODO
  }

  render () {
    const { instructions } = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        instructions={instructions}
        onChangeOrder={this.onChangeOrder}
        onClose={this.onClose}
        onNavPress={this.onNavPress}
        onRun={this.onRun}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeLabContainer)
