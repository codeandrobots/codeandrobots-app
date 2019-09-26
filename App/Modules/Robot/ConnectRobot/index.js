import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Images } from 'App/Themes'
import ConnectRobotScreen from './Screen'

export class ConnectRobotContainer extends Component {
  onConnectPress = () => {
    // TODO
  }

  onLinkPress = () => {
    // TODO
  }

  render () {
    const image = Images.hello
    const text = 'Text'
    const title = 'Title'
    const links = ['Build instructions', 'Website']
    return (
      <ConnectRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        image={image}
        text={text}
        title={title}
        links={links}
        onLinkPress={this.onLinkPress}
        onConnectPress={this.onConnectPress}
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
