
import Bluetooth from 'App/Services/Bluetooth'
import WebSocket from 'App/Services/WebSocket'

import Simulator from './Simulator'
import Otto from './Otto'
import Nybble from './Nybble'

const simulator = new Simulator()
const otto = new Otto()
const nybble = new Nybble()

const isConnectedToSocket = () => {
  return WebSocket.getInstance().isConnected
}

const isConnectedToBluetooth = async () => {
  return Bluetooth.isConnected()
}

export const isConnected = async () => {
  return isConnectedToSocket() || isConnectedToBluetooth()
}

export default class Client {
  getClient = () => {
    if (isConnectedToSocket()) {
      return simulator
    } else if (isConnectedToBluetooth()) {
      const connnectedDevice = Bluetooth.getConnectedDevice()
      const isNybble = connnectedDevice != null &&
        connnectedDevice.name != null &&
        connnectedDevice.name.toLowerCase().startsWith('nybble')
      return (isNybble) ? nybble : otto
    }
    return null
  }

  getConfig = async () => {
    const client = this.getClient()
    return (client) ? client.getConfig() : null
  }

  getSounds = async () => {
    const client = this.getClient()
    return (client) ? client.getSounds() : []
  }

  setParam = async (param, index) => {
    const client = this.getClient()
    if (client) { client.setParam(param, index) }
  }

  play = async (sound) => {
    const client = this.getClient()
    if (client) { client.play(sound) }
  }

  move = async (touch) => {
    const client = this.getClient()
    if (client) { client.move(touch) }
  }

  moveAndStop = async (touch) => {
    const client = this.getClient()
    if (client) { client.moveAndStop(touch) }
  }

  doSkill = (index) => {
    const client = this.getClient()
    if (client) { client.doSkill(index) }
  }

  run = async (instructions) => {
    const client = this.getClient()
    if (client) {
      client.run(instructions)
    }
  }
}
