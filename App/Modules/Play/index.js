import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from './Screen'

export class PlayContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showNotReadyModal: false
    }
  }

  onGetStartedPress = () => {
    this.props.navigation.navigate('GetStartedScreen')
  }

  notReady = () => {
    this.setState({ showNotReadyModal: true })
  }

  onHideNotReadyModal = () => {
    this.setState({ showNotReadyModal: false })
  }

  render () {
    const { showNotReadyModal } = this.state
    const onPress = {
      getStarted: this.onGetStartedPress,
      explore: this.notReady,
      playGame: this.notReady,
      drive: this.notReady,
      message: this.notReady,
      dance: this.notReady,
      findAFriend: this.notReady
    }
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        showNotReadyModal={showNotReadyModal}
        onHideNotReadyModal={this.onHideNotReadyModal}
        onPress={onPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayContainer)
