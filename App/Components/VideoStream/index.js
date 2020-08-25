import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { NoFlickerImage } from 'react-native-no-flicker-image'

import Socket from 'App/Services/Socket'
import { LoadingIndicator } from 'App/Components'
import { Colors } from 'App/Themes'
import s from './Styles'

export default class VideoStream extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'default'])
  }

  constructor (props) {
    super(props)
    this.initSocket()
    this.state = {
      encodedData: null,
      lastLogTimestamp: null,
      time: new Date().getTime()
    }
  }

  async componentDidMount () {
    this._isMounted = true

    // Refresh time in state to force re-rendering
    // at least every 10 seconds
    // e.g. if no image stream is received
    this.timer = setInterval(() => {
      const { encodedData } = this.state
      this.setState({
        time: new Date().getTime(),
        encodedData: this.isWaitingOnVideoStream() ? null : encodedData
      })
    }, 10000)
  }

  componentWillUnmount () {
    this._isMounted = false

    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  initSocket = () => {
    this.socket = Socket.getInstance()
    this.socket.setOnImageReceived(this.onImageReceived)
  }

  onImageReceived = (encodedData) => {
    this.setState({ encodedData })

    const { lastLogTimestamp } = this.state

    if (!lastLogTimestamp ||
      new Date().getTime() > lastLogTimestamp + 1000) {
      this.socket.addLog(`Render image (${encodeURI(encodedData).split(/%..|./).length - 1} bytes)`)
      this.setState({ lastLogTimestamp: new Date().getTime() })
    }
  }

  isWaitingOnVideoStream = () => {
    const { lastLogTimestamp } = this.state
    return (
      !lastLogTimestamp || new Date().getTime() > lastLogTimestamp + 5000
    )
  }

  render () {
    const {
      size,
      style = {} } = this.props
    const { encodedData } = this.state

    const isSmall = (size === 'small')

    const styles = {
      videoPlayer: [
        s.videoPlayer,
        ...((isSmall) ? [s.videoPlayer_small] : []),
        ...((style.videoPlayer) ? [style.videoPlayer] : [])
      ],
      videoPlayerLoading: [
        s.videoPlayerLoading,
        ...((isSmall) ? [s.videoPlayerLoading_small] : [])
      ]
    }

    const uri = (encodedData)
      ? `data:image/jpg;base64,${encodedData}`
      : null

    return (
      <View style={s.videoView}>
        <NoFlickerImage
          style={styles.videoPlayer}
          source={{ uri }}
        />
        {this.isWaitingOnVideoStream() &&
          <View style={styles.videoPlayerLoading}>
            <LoadingIndicator size='large' color={Colors.primary} />
            <Text style={s.videoPlayerLoadingText}>Waiting on video stream...</Text>
          </View>
        }
      </View>
    )
  }
}
