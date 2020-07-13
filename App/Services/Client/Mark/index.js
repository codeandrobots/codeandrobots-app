import Socket from 'App/Services/Socket'
import Config from './Config'

const socket = Socket.getInstance()

const DELAY = 600 // Delay between commands

const sounds = []

const cmdFromTouch = (touch) => {
  if (touch.dy <= -30) {
    return Config.commands.walk.forwards
  } else if (touch.dy >= 30) {
    return Config.commands.walk.backwards
  } else if (touch.dx >= 30) {
    return Config.commands.walk.left
  } else if (touch.dx <= -30) {
    return Config.commands.walk.right
  } else {
    return null
  }
}

export default class Mark {
  lastCmdSent = null

  getConfig = () => {
    return Config
  }

  getSounds = () => {
    return sounds
  }

  setParam = (param, index) => {
    // Not yet supported
  }

  sendCommand = async (cmd) => {
    if (cmd && (!this.lastCmdSent || this.lastCmdSent !== cmd)) {
      this.lastCmdSent = cmd
      return socket.write(cmd)
    } else {
      return { ok: true }
    }
  }

  stop = async (delay) => {
    if (!delay) {
      const cmd = Config.commands.stop
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
    const cmd = cmdFromTouch(touch)
    this.sendCommand(cmd)
  }

  moveAndStop = (touch) => {
    // No need to move, just stop after short delay
    this.stop(100)
  }

  doSkill = (category, index) => {
    const skill = this.getConfig().skills.find(skill => skill.category === category)
    if (skill && skill.items.length > index) {
      const cmd = skill.items[index].cmd
      this.sendCommand(cmd)
    }
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        const { cmd } = instruction
        if (cmd) {
          socket.write(cmd)
        }
      }, delay)
      const { duration } = instruction
      delay += (duration && duration > 0) ? duration : DELAY
    })
    // Always finish with stop
    setTimeout(() => {
      this.sendCommand(Config.commands.stop)
    }, delay)
  }
}
