import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from './Screen'

export class LessonsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showNotReadyModal: false
    }
  }

  onHideNotReadyModal = () => {
    this.setState({ showNotReadyModal: false })
  }

  onPress = (lesson) => {
    if (lesson !== 'Get Started') {
      return this.setState({ showNotReadyModal: true })
    }
    this.props.navigation.navigate('GetStartedScreen')
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

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer)
