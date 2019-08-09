
import Bluetooth from 'App/Services/Bluetooth'
import Config from './Config'

const STOP = 'stop'

const DELAY = 600 // Delay between commands

const sounds = []

const cmdFromTouch = (touch) => {
  if (touch.dy <= -40) {
    return 'M 1' // up
  } else if (touch.dy >= 40) {
    return 'M 2' // down
  } else if (touch.dx >= 40) {
    return 'M 3' // right
  } else if (touch.dx <= -40) {
    return 'M 4' // left
  } else {
    return 'M 0'
  }
}

const cmdFromInstruction = (instruction) => {
  if (instruction === 'up') {
    return 'M 1' // up
  } else if (instruction === 'down') {
    return 'M 2' // down
  } else if (instruction === 'right') {
    return 'M 3' // right
  } else if (instruction === 'left') {
    return 'M 4' // left
  } else if (instruction === STOP) {
    return 'M 0' // stop
  } else {
    return 'M 0'
  }
}

export default class Nybble {
  lastCmdSent = null
  gait = 0

  getConfig = () => {
    return Config
  }

  getSounds = () => {
    return sounds
  }

  setParam = (param, index) => {
    if (param === 'Gait') {
      this.gait = index
    }
  }

  stop = async (delay) => {
    if (!delay) {
      const cmd = cmdFromInstruction(STOP)
      return Bluetooth.write(cmd)
    }
    setTimeout(() => { this.stop() }, delay)
  }

  play = async (sound) => {
    return Bluetooth.write('K ' + sound.key)
  }

  move = (touch) => {
    const cmd = cmdFromTouch(touch)
    if (!this.lastCmdSent || this.lastCmdSent !== cmd) {
      Bluetooth.write(cmd + ' ' + this.speed)
      this.lastCmdSent = cmd
    }
  }

  moveAndStop = (touch) => {
    this.move(touch)
    this.stop(DELAY)
  }

  doSkill = (index) => {
    Bluetooth.write(this.getConfig().skills[index].cmd)
  }

  run = (instructions) => {
    let delay = 0
    instructions.push(STOP) // Always finish with stop
    instructions.forEach((instruction) => {
      setTimeout(() => {
        const cmd = cmdFromInstruction(instruction)
        Bluetooth.write(cmd)
      }, delay)
      delay += DELAY
    })
  }
}
