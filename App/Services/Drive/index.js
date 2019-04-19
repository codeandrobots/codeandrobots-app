import WebSocket from 'App/Services/WebSocket'

const socket = WebSocket.getInstance()

export default class Drive {
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
    if (direction) {
      socket.emit('go', direction)
    }
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        socket.emit('go', instruction)
      }, delay)
      delay += 500
    })
  }
}
