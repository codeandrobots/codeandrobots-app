
import Bluetooth from 'App/Services/Bluetooth'
import WebSocket from 'App/Services/WebSocket'

import Simulator from './Simulator'
import Otto from './Otto'
import Nybble from './Nybble'

const robot = { name: null }

const simulator = new Simulator()
const otto = new Otto()
const nybble = new Nybble()

export const setRobot = async (robotName) => {
  if (robot.name !== robotName) {
    robot.name = robotName
    const connectedToBluetooth = await isConnectedToBluetooth()
    if (connectedToBluetooth) {
      // Robot changed so best to disconnect
      await Bluetooth.disconnect()
    }
  }
}

const isConnectedToSocket = () => {
  return WebSocket.getInstance().isConnected
}

const isConnectedToBluetooth = async () => {
  return Bluetooth.isConnected()
}

export const isConnected = async () => {
  const connectedToBluetooth = await isConnectedToBluetooth()
  return isConnectedToSocket() || connectedToBluetooth
}

export default class Client {
  getClient = async () => {
    if (robot.name === 'otto') {
      return otto
    } else if (robot.name === 'nybble') {
      return nybble
    } else if (robot.name === 'simulator') {
      return simulator
    } else {
      // Get client based on connection if possible
      const connectedToBluetooth = await isConnectedToBluetooth()
      if (connectedToBluetooth) {
        const connnectedDevice = Bluetooth.getConnectedDevice()
        const isNybble = connnectedDevice != null &&
          connnectedDevice.name != null &&
          connnectedDevice.name.toLowerCase().startsWith('nybble')
        return (isNybble) ? nybble : otto
      } else if (isConnectedToSocket()) {
        return simulator
      } else {
        return null
      }
    }
  }

  getConfig = async () => {
    const client = await this.getClient()
    return (client) ? client.getConfig() : null
  }

  getSounds = async () => {
    const client = await this.getClient()
    return (client) ? client.getSounds() : []
  }

  setParam = async (param, index) => {
    const client = await this.getClient()
    if (client) { client.setParam(param, index) }
  }

  play = async (sound) => {
    const client = await this.getClient()
    if (client) { client.play(sound) }
  }

  move = async (touch) => {
    const client = await this.getClient()
    if (client) { client.move(touch) }
  }

  moveAndStop = async (touch) => {
    const client = await this.getClient()
    if (client) { client.moveAndStop(touch) }
  }

  doSkill = async (category, index) => {
    const client = await this.getClient()
    if (client) { client.doSkill(category, index) }
  }

  run = async (instructions) => {
    const client = await this.getClient()
    if (client) {
      client.run(instructions)
    }
  }
}
