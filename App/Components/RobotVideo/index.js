import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Video from 'react-native-video'

import { TouchableOpacity, Icon } from 'App/Components'
import VideoButton from './VideoButton'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class RobotVideo extends Component {
  static PropTypes = {
    video: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
  }

  constructor (props) {
    super(props)
    this.state = {
      paused: true,
      imageWidth: 0,
      imageHeight: 0
    }
  }

  async componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  onVideoToggle = () => {
    const { paused } = this.state
    this.setState({ paused: !paused })
  }

  onVideoEnd = (data) => {
    this.setState({ paused: true }, () => {
      this.player.seek(0)
    })
  }

  onVideoError = (e) => {
    console.log(e)
  }

  render () {
    const {
      // style = undefined,
      video
    } = this.props

    const {paused} = this.state

    return (
      <TouchableOpacity style={s.videoView} onPress={this.onVideoToggle}>
        {paused && (
          <VideoButton
            style={{ button: StyleSheet.flatten(s.videoButton) }}
            onPress={this.onVideoToggle}>
            <Icon
              name='play'
              size={16}
              style={{ color: Colors.primary }} />
          </VideoButton>
        )}
        <Video
          ref={(ref) => { this.player = ref }}
          paused={paused}
          source={video}
          resizeMode='cover'
          ignoreSilentSwitch={'ignore'}
          progressUpdateInterval={100.0}
          onEnd={this.onVideoEnd}
          onError={this.onVideoError}
          style={s.videoPlayer} />
      </TouchableOpacity>
    )
  }
}
