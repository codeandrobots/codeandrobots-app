import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from '../Components'

export class SettingsContainer extends Component {
  onNotificationsPress = () => {
    // TODO
  }

  onShareAppPress = () => {
    // TODO
  }

  onFeedbackPress = () => {
    // TODO
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onNotificationsPress={this.onNotificationsPress}
        onShareAppPress={this.onShareAppPress}
        onFeedbackPress={this.onFeedbackPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
