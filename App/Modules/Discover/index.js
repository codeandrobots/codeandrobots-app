import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from './Screen'

export class DiscoverContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showNotReadyModal: false
    }
  }

  onHideNotReadyModal = () => {
    this.setState({ showNotReadyModal: false })
  }

  onPress = () => {
    this.setState({ showNotReadyModal: true })
  }

  render () {
    const { showNotReadyModal } = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        showNotReadyModal={showNotReadyModal}
        onHideNotReadyModal={this.onHideNotReadyModal}
        onPress={this.onPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer)
