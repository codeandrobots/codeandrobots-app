import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import ConnectRobotScreen from './Screen'
import { Videos } from 'App/Themes'

export class ConnectRobotContainer extends Component {
  static propTypes = {
    video: Videos,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string),
    onLinksPress: PropTypes.arrayOf(PropTypes.func),
    onButtonPress: PropTypes.func.isRequired
  }
  render () {
    const {
      video,
      text,
      title,
      links,
      onLinksPress,
      onButtonPress
    } = this.props
    return (
      <ConnectRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        video={video}
        text={text}
        title={title}
        links={links}
        onLinksPress={onLinksPress}
        onButtonPress={onButtonPress}
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
