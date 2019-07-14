import WebSocket from 'App/Services/WebSocket'

import { API } from 'App/Services/Api'

const socket = WebSocket.getInstance()
const api = API.create()

const sounds = [
  {key: '1', name: 'Beep'},
  {key: '2', name: 'Bop'}
]

const calculateDirection = (touch) => {
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

export default class Simulator {
  getSounds = () => {
    return sounds
  }

  play = (sound) => {
    socket.emit({event: 'play', sound})
  }

  move = (touch) => {
    // Only moveAndStop is supported for the time being

    // TODO Proof of concept
    const direction = calculateDirection(touch)
    if (direction) {
      api.move(direction)
    }
  }

  moveAndStop = (touch) => {
    // const direction = calculateDirection(touch)
    // if (direction) {
    //   socket.emit({event: 'move', direction})
    // }

    // TODO Proof of concept
    api.move('stop')
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        // TODO Translate instruction to correct event and data
        socket.emit({event: 'move', direction: instruction})
      }, delay)
      delay += 500
    })
  }
}
