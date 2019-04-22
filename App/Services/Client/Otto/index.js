
import Bluetooth from 'App/Services/Bluetooth'

const sounds = [
  {key: '1', name: 'Beep'},
  {key: '2', name: 'Bye'},
  {key: '3', name: 'Surprise'},
  {key: '4', name: 'OhOoh'},
  {key: '6', name: 'Surprise'},
  {key: '7', name: 'Cuddly'},
  {key: '8', name: 'Sleeping'},
  {key: '9', name: 'Happy'},
  {key: '10', name: 'Super Happy'},
  {key: '12', name: 'Sad'},
  {key: '13', name: 'Confused'},
  {key: '14', name: 'Fart'}
]

export default class Otto {
  getSounds = () => {
    return sounds
  }

  play = async (sound) => {
    return Bluetooth.write('K ' + sound.key)
  }

  move = (touch) => {
    // TODO
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        // TODO
      }, delay)
      delay += 500
    })
  }
}
