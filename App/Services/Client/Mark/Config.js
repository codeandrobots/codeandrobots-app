import { Images } from 'App/Themes'

export default {
  name: 'Mark',
  image: Images.robots.mark,
  description: 'MARK (Make A Robot Kit), your hands on AI robot',
  links: [
    {
      title: 'Build Instructions',
      url: 'https://docproxy.tinkergen.com/web/#/2?page_id=405'
    },
    {
      title: 'Build Video',
      url: 'https://tinkergen.com/mark_video'
    },
    {
      title: 'Website',
      url: 'https://www.tinkergen.com/mark'
    }
  ],
  connection: { type: 'socket', port: 3456 },
  features: {
    drive: true,
    beep: false,
    video: true
  },
  params: [],
  commands: {
    stop: 5,
    walk: {
      forwards: 1,
      left: 2,
      right: 3,
      backwards: 4
    }
  },
  moves: [
    { title: 'Wait', cmd: 5, showDuration: true },
    { title: 'Forwards', cmd: 1, showDuration: true },
    { title: 'Back', cmd: 4, showDuration: true },
    { title: 'Left', cmd: 2, showDuration: true },
    { title: 'Right', cmd: 3, showDuration: true }
  ],
  skills: []
}
