import Socket from 'App/Services/Socket'
import Config from './Config'

const socket = Socket.getInstance()

const DELAY = 600 // Delay between commands

const sounds = []

const moveCmdFromTouch = (touch) => {
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

const cameraCmdFromTouch = (touch) => {
  if (touch.dy <= -30) {
    return Config.commands.tilt.down
  } else if (touch.dy >= 30) {
    return Config.commands.tilt.up
  } else if (touch.dx >= 30) {
    return Config.commands.pan.left
  } else if (touch.dx <= -30) {
    return Config.commands.pan.right
  } else {
    return null
  }
}

const cmdFromTouch = (touch, joystick) => {
  if (joystick === 0) {
    return moveCmdFromTouch(touch)
  } else if (joystick === 1) {
    return cameraCmdFromTouch(touch)
  }
}

export default class Mark {
  lastCmdSent = null
  lastCmdSentAt = null

  getConfig = () => {
    return Config
  }

  getSounds = () => {
    return sounds
  }

  setParam = (param, index) => {
    // Not yet supported
  }

  isMoveCmd = (cmd) => {
    if (!cmd) {
      return false
    }
    const cmdAsInt = parseInt(cmd, 10)
    return cmdAsInt > 0 && cmdAsInt <= 5
  }

  hasDelayPassedSinceLastCmd = () => {
    if (!this.lastCmdSentAt) {
      return true
    }
    return (new Date().getTime() - this.lastCmdSentAt) >= 50
  }

  sendCommand = async (cmd) => {
    if (cmd && (
      !this.lastCmdSent ||
      this.lastCmdSent !== cmd ||
      (!this.isMoveCmd(cmd) && this.hasDelayPassedSinceLastCmd())
    )) {
      this.lastCmdSent = cmd
      this.lastCmdSentAt = new Date().getTime()
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

  move = (touch, joystick) => {
    const cmd = cmdFromTouch(touch, joystick)
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
