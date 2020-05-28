import { Images } from 'App/Themes'

export default {
  image: Images.robots.custom_robot,
  links: [],
  connection: { type: 'bluetooth' },
  params: [],
  commands: {
    stop: 'M 0',
    forwards: 'M 1',
    back: 'M 2',
    left: 'M 3',
    right: 'M 4'
  },
  moves: [
    { title: 'Wait', cmd: 'M 0', showDuration: true },
    { title: 'Forwards', cmd: 'M 1', showDuration: true },
    { title: 'Back', cmd: 'M 2', showDuration: true },
    { title: 'Left', cmd: 'M 3', showDuration: true },
    { title: 'Right', cmd: 'M 4', showDuration: true }
  ],
  skills: []
}
