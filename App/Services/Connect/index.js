
import Bluetooth from 'App/Services/Bluetooth'
import WebSocket from 'App/Services/WebSocket'

export const isConnected = async () => {
  return WebSocket.getInstance().isConnected || Bluetooth.isConnected()
}
