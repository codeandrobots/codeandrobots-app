import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'react-native-uuid'

import Drive from 'App/Services/Drive'

import Screen from './Screen'

export class CodeLabContainer extends Component {
  constructor (props) {
    super(props)
    this.drive = new Drive()
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
      (instruction) => instruction.id !== instructionToRemove.id
    )
    this.setState({ instructions })
  }

  onNavPress = (instruction) => {
    const instructions = this.sortInstructions()
    instructions.push({...instruction, id: uuid.v4()})
    this.setState({ instructions })
  }

  onRun = () => {
    const instructions = this.sortInstructions()
    this.drive.run(instructions.map(instruction => instruction.key))
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
