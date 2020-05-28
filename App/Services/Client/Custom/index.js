
import Bluetooth from 'App/Services/Bluetooth'

const DELAY = 600 // Delay between commands

export default class Custom {
  config = null
  lastCmdSent = null

  setConfig = config => {
    this.config = config
  }

  getConfig = () => {
    return this.config
  }

  setParam = (param, index) => {
    // TODO
  }

  cmdFromTouch = (touch) => {
    console.log(this.getConfig()) // TODO REMOVE
    if (touch.dy <= -30) {
      console.log('--- FORWARDS') // TODO REMOVE
      return this.getConfig().commands.forwards
    } else if (touch.dy >= 30) {
      return this.getConfig().commands.back
    } else if (touch.dx <= -30) {
      return this.getConfig().commands.left
    } else if (touch.dx >= 30) {
      return this.getConfig().commands.right
    } else {
      return null
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
      this.sendCommand(this.getConfig().commands.stop)
    } else {
      setTimeout(() => { this.stop() }, delay)
    }
  }

  play = async (sound) => {
    // TODO
  }

  move = (touch) => {
    const cmd = this.cmdFromTouch(touch)
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
      this.sendCommand(this.getConfig().commands.stop)
    }, delay)
  }
}
