
import BluetoothSerial from 'react-native-bluetooth-serial'

class ConnectedDevice {
  device = null
}

const connectedDevice = new ConnectedDevice()

const isEnabled = async () => {
  try {
    const enabled = await BluetoothSerial.isEnabled()
    return {enabled}
  } catch (error) {
    return {error}
  }
}

const isConnected = async () => {
  try {
    return await BluetoothSerial.isConnected()
  } catch (error) {
    return false
  }
}

const getConnectedDevice = () => {
  return connectedDevice.device
}

const enable = async () => {
  try {
    await BluetoothSerial.enable()
    return {enabled: true, error: null}
  } catch (error) {
    return {enabled: false, error}
  }
}

const list = async () => {
  try {
    const devices = await BluetoothSerial.list()
    return {devices: devices, error: null}
  } catch (error) {
    return {devices: [], error}
  }
}

const scan = async () => {
  try {
    const deviceList = await BluetoothSerial.list()
    const unpairedDevices = await BluetoothSerial.discoverUnpairedDevices()

    // Contact unpaired devices to the list but remove any duplicates
    const devices = deviceList.concat(
      unpairedDevices.filter((unpairedDevice) =>
        deviceList.findIndex((device) => device.id === unpairedDevice.id) < 0
      )
    )

    return {devices, error: null}
  } catch (error) {
    return {devices: [], error}
  }
}

const connect = async (device) => {
  try {
    await BluetoothSerial.connect(device.id)
    connectedDevice.device = device
    return {connected: true, error: null}
  } catch (error) {
    return {connected: false, error}
  }
}

const disconnect = async () => {
  try {
    await BluetoothSerial.disconnect()
    return {error: null}
  } catch (error) {
    return {error}
  }
}

export default {
  isEnabled,
  isConnected,
  getConnectedDevice,
  enable,
  list,
  scan,
  connect,
  disconnect
}
