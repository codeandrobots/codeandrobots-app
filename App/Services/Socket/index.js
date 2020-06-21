import TcpSocket from 'react-native-tcp-socket'
const Buffer = (global.Buffer = global.Buffer || require('buffer').Buffer)

export default class Socket {
  static myInstance = null

  server = null
  socket = null
  isConnected = false

  // Default event functions
  onData = () => {}
  onError = (error) => {
    console.warn(error)
  }
  onClose = () => {}

  static getInstance () {
    if (Socket.myInstance == null) {
      Socket.myInstance = new Socket()
    }

    return Socket.myInstance
  }

  connect = (host, port, onConnect = () => {}) => {
    this.server = TcpSocket.createServer((socket) => {
      this.socket = socket

      socket.on('data', this.onData)
      socket.on('error', this.onError)
      socket.on('close', this.onClose)
    }).listen(
      { host, port, reuseAddress: true },
      (error) => {
        if (error) {
          console.warn(`Failed to connect to ${host}:${port} -` + error)
          this.onError(error)
        } else {
          this.isConnected = true
          onConnect({host, port})
        }
      }
    )
  }

  isConnected = () => {
    return this.isConnected
  }

  setOnAdd = (onData) => {
    this.onAdd = onData
  }

  setOnError = (onError) => {
    this.onError = onError
  }

  setOnClose = (onClose) => {
    this.onClose = onClose
  }

  write = (action) => {
    if (this.socket && this.isConnected) {
      this.socket.write(Buffer.from([action]))
    }
  }

  close = () => {
    if (this.server) {
      this.server.close()
      this.server = null
      this.socket = null
      this.isConnected = false
    }
  }
}
