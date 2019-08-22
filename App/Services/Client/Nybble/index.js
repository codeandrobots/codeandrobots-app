
import Bluetooth from 'App/Services/Bluetooth'
import Config, { Gaits } from './Config'

const STOP = 'stop'

const DELAY = 600 // Delay between commands

const sounds = []

const cmdFromTouch = (touch, gait) => {
  if (touch.dy <= -40) {
    if (gait === Gaits.Crawl) {
      return Config.commands.crawl.forwards
    } else if (gait === Gaits.Walk) {
      return Config.commands.walk.forwards
    } else if (gait === Gaits.Trot) {
      return Config.commands.trot.forwards
    } else {
      return Config.commands.walk.forwards
    }
  } else if (touch.dy >= 40) {
    return Config.commands.walk.backwards
  } else if (touch.dx >= 40) {
    if (gait === Gaits.Crawl) {
      return Config.commands.crawl.right
    } else {
      return Config.commands.walk.right
    }
  } else if (touch.dx <= -40) {
    if (gait === Gaits.Crawl) {
      return Config.commands.crawl.left
    } else {
      return Config.commands.walk.left
    }
  } else {
    return Config.commands.stop
  }
}

const cmdFromInstruction = (instruction) => {
  if (instruction === 'up') {
    return Config.commands.walk.forwards
  } else if (instruction === 'down') {
    return Config.commands.walk.backwards
  } else if (instruction === 'right') {
    return Config.commands.walk.right
  } else if (instruction === 'left') {
    return Config.commands.walk.left
  } else if (instruction === STOP) {
    return Config.commands.stop
  } else {
    return Config.commands.stop
  }
}

export default class Nybble {
  lastCmdSent = null
  gait = Config.params[0].defaultIndex

  getConfig = () => {
    return Config
  }

  getSounds = () => {
    return sounds
  }

  setParam = (param, index) => {
    if (param.title === 'Gait') {
      this.gait = index
    }
  }

  sendCommand = async (cmd) => {
    if (cmd && (!this.lastCmdSent || this.lastCmdSent !== cmd)) {
      this.lastCmdSent = cmd
      return Bluetooth.write(cmd)
    } else {
      return { ok: true }
    }
  }

  stop = async (delay) => {
    if (!delay) {
      const cmd = cmdFromInstruction(STOP)
      return this.sendCommand(cmd)
    } else {
      setTimeout(() => { this.stop() }, delay)
    }
  }

  play = async (sound) => {
    // TODO
    return { ok: true }
  }

  move = (touch) => {
    const cmd = cmdFromTouch(touch, this.gait)
    this.sendCommand(cmd)
  }

  moveAndStop = (touch) => {
    // No need to move, just stop after short delay
    this.stop(100)
  }

  doSkill = (index) => {
    const cmd = this.getConfig().skills[index].cmd
    this.sendCommand(cmd)
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
