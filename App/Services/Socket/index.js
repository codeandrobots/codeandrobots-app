import TcpSocket from 'react-native-tcp-socket'
import binaryToBase64 from 'binaryToBase64'

const Buffer = (global.Buffer = global.Buffer || require('buffer').Buffer)

export default class Socket {
  static myInstance = null

  server = null
  sockets = []
  nextSocketId = 0
  isConnected = false
  host = null
  port = null

  logs = []
  lastLogTimestamp = null

  // Image data
  imageData = null
  imageDataStart = false
  lastImageUpdate = null

  // Default event functions
  onImageReceived = () => {}
  onError = (error, socket) => {
    this.warn(`Client socket #${this.getSocketId(socket)} error - ` + error, error)
  }
  onEnd = (socket) => {
    this.warn(`Client socket #${this.getSocketId(socket)} disconnected`)

    const index = this.sockets.indexOf(s => this.getSocketId(s) === this.getSocketId(socket))
    if (index >= 0) {
      this.sockets.splice(index, 1)
    }
  }
  onClose = (error, socket) => {
    const msg = `Client socket #${this.getSocketId(socket)} closed ` + (error || '')
    if (error) {
      this.warn(msg, error)
    } else {
      this.addLog(msg)
    }
  }

  static getInstance () {
    if (Socket.myInstance == null) {
      Socket.myInstance = new Socket()
    }

    return Socket.myInstance
  }

  connect = (host, port, onConnect = () => {}, onConnectError = () => {}) => {
    if (this.server) {
      if (host === this.host && port === this.port) {
        this.addLog(`Already connected to ${this.host}:${this.port}`)
        onConnect({host, port})
        return
      } else {
        this.close()
      }
    }
    this.addLog(`Connect ${host}:${port}`)
    this.server = TcpSocket.createServer((socket) => {
      // TODO Seems that on android, no data is received if more than
      // 3 or 4 socket clients are connected so destroying all sockets
      // before accepting a new one. This is probably ok for now
      // since it's likely the client has reconnected & the app only
      // needs to process one data stream at a time
      this.addLog(`${this.sockets.length} socket connected`)
      this.sockets.forEach(socket => {
        this.addLog(`Destroy socket #${this.getSocketId(socket)}`)
        socket.destroy()
      })
      this.sockets = []

      this.sockets.push(socket)
      socket.id = ++this.nextSocketId
      if (socket._address) {
        socket.name = `${socket._address.address}:${socket._address.port} (${socket._address.family})`
      } else if (socket.localAddress) {
        socket.name = `${socket.localAddress}:${socket.localPort} (${socket.remoteFamily})`
      } else if (socket.localAddress) {
        socket.name = `${socket.remoteAddress}:${socket.remotePort} (${socket.remoteFamily})`
      } else {
        socket.name = `Socket #${this.getSocketId(socket)} (Unknown ip & port)`
      }
      this.addLog(`Socket #${this.getSocketId(socket)} from ${socket.name} has connected`)
      socket.on('data', (data) => { this.onImageData(data, socket) })
      socket.on('error', (error) => { this.onError(error, socket) })
      socket.on('end', () => { this.onEnd(socket) })
      socket.on('close', (error) => { this.onClose(error, socket) })
    }).listen(
      { host, port, reuseAddress: true },
      (error) => {
        if (error) {
          this.warn(`Failed to connect to ${host}:${port} - ` + error, error)
          this.onError(error)
          onConnectError(error)
        } else {
          // this.addLog(`Connected to ${host}:${port}`)
          this.addLog(`Connected to ${JSON.stringify(this.server.address())}`)
          this.isConnected = true
          this.host = host
          this.port = port
          onConnect({host, port})
        }
      }
    ).on('error', (error) => {
      console.log(error.message) // TODO REMOVE
      if (error.message && error.message.indexOf('EADDRINUSE') >= 0) {
        this.warn('Server error, address in use!')
        // TODO Try to close & listen again?
        // See https://nodejs.org/api/net.html#net_server_listen
      } else {
        this.warn('Server error ' + (error || ''), error)
      }
    })
  }

  getIsConnected = () => {
    return this.isConnected
  }

  getConnection = () => {
    return {
      host: this.host,
      port: this.port
    }
  }

  getSocketId = (socket) => {
    return (socket && socket.id) ? socket.id : '?'
  }

  warn = (msg, error) => {
    this.addLog(msg)
    // Best to not call console warn as it sometimes crashes app
    // See https://github.com/facebook/react-native/issues/14364
    if (__DEV__) {
      console.log(msg)
      if (error) {
        console.log(error)
      }
    }
  }

  addLog = (log, checkLastLogTimestamp = false) => {
    if (!checkLastLogTimestamp ||
      !this.lastLogTimestamp ||
      new Date().getTime() > this.lastLogTimestamp + 1000) {
      this.logs.unshift(log)
      this.lastLogTimestamp = new Date().getTime()
    }
  }

  getLogs = () => {
    return this.logs
  }

  setOnData = (onData) => {
    this.socket.on('data', onData)
  }

  setOnImageReceived = (onImageReceived) => {
    this.resetImageData()
    this.onImageReceived = onImageReceived
  }

  setOnError = (onError) => {
    this.onError = onError
  }

  setOnClose = (onClose) => {
    this.onClose = onClose
  }

  resetImageData = () => {
    this.imageData = null
    this.imageDataStart = false
    this.lastImageUpdate = null
  }

  onImageData = (chunk, socket) => {
    if (chunk) {
      this.addLog(`Received ${encodeURI(chunk).split(/%..|./).length - 1} bytes from socket #${this.getSocketId(socket)}`, true)
    }
    const startIndex = chunk.indexOf('\xFF\xD8', 0, 'binary')
    if (startIndex >= 0) {
      this.imageData = chunk.subarray(startIndex)
      this.imageDataStart = true
    } else if (this.imageDataStart) {
      const endIndex = chunk.indexOf('\xFF\xD9', 0, 'binary')
      if (endIndex >= 0) {
        const imageBuffer = Buffer.concat([
          this.imageData,
          chunk.subarray(0, endIndex + 2)
        ])
        const encodedData = binaryToBase64(imageBuffer)
        this.onImageReceived(encodedData)
        this.imageDataStart = false
      } else {
        this.imageData = Buffer.concat([this.imageData, chunk])
      }
    }
  }

  write = (action) => {
    if (this.isConnected) {
      this.sockets.forEach(socket => {
        this.addLog(`Write ${action} to socket #${this.getSocketId(socket)}`)
        if (socket && !socket.destroyed) {
          const success = socket.write(Buffer.from([action]))
          if (!success) {
            this.warn(`Write returned false, some data was queued in memory`)
          }
        }
      })
    }
  }

  close = () => {
    this.addLog(`Close server socket`)
    if (this.server) {
      this.sockets.forEach(socket => {
        this.addLog(`Destroy socket #${this.getSocketId(socket)}`)
        socket.destroy()
      })
      this.sockets = []
      this.nextSocketId = 0
      this.server.close()
      this.server = null
      this.isConnected = false
      this.host = null
      this.port = null
    }
  }
}
