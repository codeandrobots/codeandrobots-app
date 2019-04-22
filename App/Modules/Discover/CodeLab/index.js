import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'react-native-uuid'

import Client, { isConnected } from 'App/Services/Client'

import Screen from './Screen'

export class CodeLabContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.order = null
    this.state = {
      instructions: [],
      showNotConnectedModal: false
    }
  }

  async componentWillMount () {
    const connected = await isConnected()
    if (!connected) {
      this.setState({showNotConnectedModal: true})
    }
  }

  onHideNotConnectedModal = () => {
    this.setState({showNotConnectedModal: false})
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

  onRun = async () => {
    const connected = await isConnected()
    if (connected) {
      const instructions = this.sortInstructions()
      this.client.run(instructions.map(instruction => instruction.key))
    } else {
      this.setState({showNotConnectedModal: true})
    }
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
        showNotConnectedModal={this.state.showNotConnectedModal}
        onChangeOrder={this.onChangeOrder}
        onClose={this.onClose}
        onNavPress={this.onNavPress}
        onRun={this.onRun}
        onHideNotConnectedModal={this.onHideNotConnectedModal}
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
