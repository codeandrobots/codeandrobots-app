import React, { Component } from 'react'
import { connect } from 'react-redux'

import ConnectRobotScreen from './Screen'
// import { Videos } from 'App/Themes'

export class ConnectRobotContainer extends Component {
  render () {
    // TODO: Use in the screen
    // const data = {
    //   video: Videos.atlas,
    //   title: 'Otto DIY',
    //   text: 'The open source robot that you can build yourself.' +
    //     'You will be able to build your own Otto in as little as one hour! ' +
    //     'It is a simple robot kit for both beginners and experts.'
    // }
    return (
      <ConnectRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectRobotContainer)
