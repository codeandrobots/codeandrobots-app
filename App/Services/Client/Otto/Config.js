import { Images } from 'App/Themes'

export const Speed = {
  Slow: 1500,
  Normal: 1000,
  Fast: 500
}

export default {
  name: 'Otto',
  connection: { type: 'bluetooth' },
  features: {
    drive: true,
    beep: true
  },
  params: [
    {
      title: 'Speed',
      values: ['Slow', 'Normal', 'Fast'],
      defaultIndex: 1
    }
  ],
  commands: {
    stop: 'M 0',
    sound: 'K',
    walk: {
      forwards: 'M 1',
      backwards: 'M 2',
      right: 'M 3',
      left: 'M 4'
    }
  },
  sounds: [
    {key: '1', name: 'Beep'},
    {key: '2', name: 'Bye'},
    {key: '3', name: 'Surprise'},
    {key: '4', name: 'OhOoh'},
    {key: '6', name: 'Cuddly'},
    {key: '7', name: 'Sleeping'},
    {key: '8', name: 'Happy'},
    {key: '9', name: 'Super Happy'},
    {key: '11', name: 'Sad'},
    {key: '12', name: 'Confused'},
    {key: '14', name: 'Fart'}
  ],
  skills: [
    { title: 'Up Down', image: Images.otto.skills.updown, cmd: 'M 5' },
    { title: 'Moonwalk Right', image: Images.otto.skills.moonwalk.right, cmd: 'M 6' },
    { title: 'Moonwalk Left', image: Images.otto.skills.moonwalk.left, cmd: 'M 7' },
    { title: 'Swing', image: Images.otto.skills.swing, cmd: 'M 8' },
    { title: 'Ascend', image: Images.otto.skills.ascend, cmd: 'M 20' },
    { title: 'Cross Right', image: Images.otto.skills.cross.right, cmd: 'M 9' },
    { title: 'Cross Left', image: Images.otto.skills.cross.left, cmd: 'M 10' },
    { title: 'Flap Front', image: Images.otto.skills.flap.front, cmd: 'M 12' },
    { title: 'Flap Back', image: Images.otto.skills.flap.back, cmd: 'M 13' },
    { title: 'Tiptoe', image: Images.otto.skills.tiptoe, cmd: 'M 14' },
    { title: 'Bend Right', image: Images.otto.skills.bend.right, cmd: 'M 16' },
    { title: 'Bend Left', image: Images.otto.skills.bend.left, cmd: 'M 15' },
    { title: 'Shake Right', image: Images.otto.skills.shake.right, cmd: 'M 18' },
    { title: 'Shake Left', image: Images.otto.skills.shake.left, cmd: 'M 17' },
    { title: 'Jitter', image: Images.otto.skills.jitter, cmd: 'M 19' }
  ],
  showSkillIcons: true
}