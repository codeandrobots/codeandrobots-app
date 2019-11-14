
import Bluetooth from 'App/Services/Bluetooth'
import Config, { Speed } from './Config'

const DELAY = 600 // Delay between commands

const cmdFromTouch = (touch) => {
  if (touch.dy <= -40) {
    return Config.commands.walk.forwards
  } else if (touch.dy >= 40) {
    return Config.commands.walk.backwards
  } else if (touch.dx >= 40) {
    return Config.commands.walk.left
  } else if (touch.dx <= -40) {
    return Config.commands.walk.right
  } else {
    return null
  }
}

export default class Otto {
  lastCmdSent = null
  speed = Speed.Normal

  getConfig = () => {
    return Config
  }

  getSounds = () => {
    return Config.sounds
  }

  setParam = (param, index) => {
    if (param.title === 'Speed') {
      switch (index) {
        case 0:
          this.speed = Speed.Slow
          break
        case 1:
          this.speed = Speed.Normal
          break
        case 2:
          this.speed = Speed.Fast
          break
        default:
          this.speed = Speed.Normal
      }
    }
  }

  sendCommand = async (cmd, checkLastCommand = false) => {
    if (cmd && (!checkLastCommand || !this.lastCmdSent || this.lastCmdSent !== cmd)) {
      this.lastCmdSent = cmd
      return Bluetooth.writeln(cmd)
    } else {
      return { ok: true }
    }
  }

  stop = (delay) => {
    if (!delay) {
      this.sendCommand(Config.commands.stop)
    } else {
      setTimeout(() => { this.stop() }, delay)
    }
  }

  play = async (sound) => {
    return this.sendCommand(Config.commands.sound + ' ' + sound.key)
  }

  move = (touch) => {
    const cmd = cmdFromTouch(touch) + ' ' + this.speed
    this.sendCommand(cmd, true)
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
      this.stop(DELAY)
    }
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        const { cmd } = instruction
        if (cmd) {
          this.sendCommand(cmd)
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
