import Config from 'react-native-config'

import SocketIOClient from 'socket.io-client'

export default class Drive {
  static myInstance = null

  socket = null

  static getInstance () {
    if (Drive.myInstance == null) {
      Drive.myInstance = new Drive()
    }
    if (Config.SOCKET_IO_URL) {
      Drive.myInstance.socket = SocketIOClient(Config.SOCKET_IO_URL)
    }
    return Drive.myInstance
  }

  direction = (touch) => {
    if (touch.dy <= -40) {
      return 'up'
    } else if (touch.dy >= 40) {
      return 'down'
    } else if (touch.dx <= -40) {
      return 'left'
    } else if (touch.dx >= 40) {
      return 'right'
    } else {
      return null
    }
  }

  go = (touch) => {
    const direction = this.direction(touch)
    if (this.socket && direction) {
      this.socket.emit('go', direction)
    }
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        this.socket.emit('go', instruction)
      }, delay)
      delay += 500
    })
  }
}
