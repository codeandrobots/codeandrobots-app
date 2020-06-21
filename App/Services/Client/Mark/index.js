import binaryToBase64 from 'binaryToBase64'

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

const onData = (chunk) => {
  // this.updateChatter("Server Received: " + chunk.length);
  // socket.write('Echo server\r\n');

  // socket.write(new Buffer([this.action]));
  // this.updateChatter("WRITE");

  if (!this.imageDataStart) {
    const startIndex = chunk.indexOf('\xFF\xD8', 0, 'binary')
    if (startIndex >= 0) {
      console.log('FOUND START INDEX ' + startIndex)
      this.imageData = chunk.subarray(startIndex)
      this.imageDataStart = true
    }
  } else {
    const endIndex = chunk.indexOf('\xFF\xD9', 0, 'binary')
    if (endIndex >= 0 || this.imageData.length > 2900) {
      // console.log("FOUND END INDEX " + endIndex);
      let imageBuffer = this.imageData
      if (endIndex >= 0) {
        // this.updateChatter("FOUND END INDEX " + endIndex);
        imageBuffer = Buffer.concat([
          this.imageData,
          chunk.subarray(0, endIndex + 2)
        ])
      }
      // savedImage = true;

      // this.updateChatter("Image received: " + imageBuffer.length);

      // const index = imageBuffer.lastIndexOf("\xFF\xD9", 0, "binary");

      // this.updateChatter(
      //   "FOUND END INDEX " +
      //     endIndex +
      //     " " +
      //     imageBuffer.length +
      //     " " +
      //     index
      // );

      // this.updateChatter("------------ IMAGE DATA RECEIVED");

      // this.updateChatter(imageBuffer.length);
      const encodedData = binaryToBase64(imageBuffer)
      // const now = new Date().getTime()
      // if (!lastImageUpdate || now - lastImageUpdate > 1000) {
      this.setState({ encodedData })
      // lastImageUpdate = new Date().getTime();
      // }
      // this.updateChatter(base64Data);

      // fs.writeFile("./test.jpg", imageBuffer, (err) => {
      //   if (err) throw err;
      //   console.log("The file has been saved!");
      // });

      this.imageDataStart = false
    } else {
      // console.log("CONCAT");
      this.imageData = Buffer.concat([this.imageData, chunk])
    }
  }
}

onConnected = ({ host, port }) => {
  console.log('Socket server listening on ' + host + ':' + port)
}

onError = (error) => {
  console.log('server client error - ' + error)
}

onClose = (error) => {
  console.log('server client closed ' + (error ? error : ''))
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
