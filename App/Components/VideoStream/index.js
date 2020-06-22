import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import binaryToBase64 from 'binaryToBase64'

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
    this.state = {
      encodedData: null
    }
  }

  async componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this.resetImageData()
    // TODO What about socket.close?
    this._isMounted = false
  }

  initSocket = () => {
    this.resetImageData()
    this.socket = Socket.getInstance()
    this.socket.setOnData(this.onData)
    this.socket.setOnError(this.onError)
    this.socket.setOnClose(this.onClose)
  }

  resetImageData = () => {
    this.imageData = null
    this.imageDataStart = false
    this.lastImageUpdate = null
  }

  onData = (chunk) => {
    if (!this.imageDataStart) {
      const startIndex = chunk.indexOf('\xFF\xD8', 0, 'binary')
      if (startIndex >= 0) {
        this.imageData = chunk.subarray(startIndex)
        this.imageDataStart = true
      }
    } else {
      const endIndex = chunk.indexOf('\xFF\xD9', 0, 'binary')
      if (endIndex >= 0 || this.imageData.length > 2900) {
        let imageBuffer = this.imageData
        if (endIndex >= 0) {
          imageBuffer = Buffer.concat([
            this.imageData,
            chunk.subarray(0, endIndex + 2)
          ])
        }
        const encodedData = binaryToBase64(imageBuffer)
        this.setState({ encodedData })
        this.imageDataStart = false
      } else {
        this.imageData = Buffer.concat([this.imageData, chunk])
      }
    }
  }

  onConnected = ({ host, port }) => {
    console.log('Socket server listening on ' + host + ':' + port)
  }

  onError = (error) => {
    console.warn('Socket server error - ' + error)
  }

  onClose = (error) => {
    console.log('Socket server client connection closed ' + (error !== null ? error : ''))
  }

  render () {
    const {
      size,
      style = {} } = this.props
    const { encodedData } = this.state

    console.log(encodedData)

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
