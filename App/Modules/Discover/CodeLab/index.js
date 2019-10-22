import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'react-native-uuid'

import Client, { isConnected } from 'App/Services/Client'
import { NavButton } from 'App/Components'

import Screen from './Screen'

export class CodeLabContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state
    return (params.headerRight)
      ? { headerRight: params.headerRight }
      : {}
  }

  constructor (props) {
    super(props)
    this.client = new Client()
    this.order = null
    this.state = {
      config: null,
      instructions: [],
      showNotConnectedModal: false
    }
  }

  async componentWillMount () {
    this.props.navigation.setParams({
      headerRight: <NavButton onPress={this.onRun} text='Run' />
    })
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  onConnect = async () => {
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
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

  onNavPress = (category, instruction) => {
    const instructions = this.sortInstructions()
    instructions.push({...instruction, id: uuid.v4()})
    this.setState({ instructions })
  }

  onRun = async () => {
    const connected = await isConnected()
    if (connected) {
      const instructions = this.sortInstructions()
      this.client.run(instructions.map(instruction => instruction.cmd))
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  render () {
    const { config, instructions } = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        config={config}
        instructions={instructions}
        showNotConnectedModal={this.state.showNotConnectedModal}
        onConnect={this.onConnect}
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
