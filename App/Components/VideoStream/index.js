import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { NoFlickerImage } from 'react-native-no-flicker-image'

import Socket from 'App/Services/Socket'
import s from './Styles'

export default class VideoStream extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'default'])
  }

  constructor (props) {
    super(props)
    this.initSocket()
    this.lastLogTimestamp = null
    this.state = {
      encodedData: null
    }
  }

  async componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  initSocket = () => {
    this.socket = Socket.getInstance()
    this.socket.setOnImageReceived(this.onImageReceived)
  }

  onImageReceived = (encodedData) => {
    this.setState({ encodedData })

    if (!this.lastLogTimestamp ||
      new Date().getTime() > this.lastLogTimestamp + 1000) {
      this.lastLogTimestamp = new Date().getTime()
      this.socket.addLog(`Render image (${encodeURI(encodedData).split(/%..|./).length - 1} bytes)`)
    }
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
      ]}

    return (
      <View style={s.videoView}>
        <NoFlickerImage
          style={styles.videoPlayer}
          source={{ uri: `data:image/jpg;base64,${encodedData}` }}
        />
      </View>
    )
  }
}
