import WebSocket from 'App/Services/WebSocket'
import Config from './Config'

const socket = WebSocket.getInstance()

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
  getConfig = () => {
    return Config
  }

  getSounds = () => {
    return sounds
  }

  setParam = (param, index) => {
    // No params are supported for the time being
  }

  stop = () => {
    // Only moveAndStop is supported for the time being
  }

  play = (sound) => {
    socket.emit({event: 'play', sound})
  }

  move = (touch) => {
    // Only moveAndStop is supported for the time being
  }

  moveAndStop = (touch) => {
    const direction = calculateDirection(touch)
    if (direction) {
      socket.emit({event: 'move', direction})
    }
  }

  doSkill = (category, index) => {
    // No skills are supported for the time being
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        const { cmd } = instruction
        // TODO Translate instruction to correct event and data
        if (cmd) {
          socket.emit({event: 'move', direction: cmd})
        }
      }, delay)
      const { duration } = instruction
      delay += (duration && duration > 0) ? duration : 500
    })
  }
}
