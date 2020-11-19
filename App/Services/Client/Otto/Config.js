import { Images } from 'App/Themes'

export const Speed = {
  Slow: 1500,
  Normal: 1000,
  Fast: 500
}

export default {
  name: 'Otto DIY',
  image: Images.robots.otto,
  description: 'The open source robot that you can build yourself',
  links: [
    {
      title: 'Build Instructions',
      url: 'https://wikifactory.com/+OttoDIY/otto-diy-plus'
    },
    {
      title: 'Build Video',
      url: 'https://youtu.be/8R6thwyIeb8'
    },
    {
      title: 'Website',
      url: 'https://www.ottodiy.com'
    }
  ],
  connection: {
    type: 'bluetooth',
    settings: {
      newLine: true
    }
  },
  features: {
    drive: true,
    beep: true,
    video: false,
    landscape: true
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
  moves: [
    { title: 'Wait', cmd: 'M 0', showDuration: true },
    { title: 'Forwards', cmd: 'M 1', showDuration: true },
    { title: 'Back', cmd: 'M 2', showDuration: true },
    { title: 'Left', cmd: 'M 3', showDuration: true },
    { title: 'Right', cmd: 'M 4', showDuration: true }
  ],
  skills: [
    {
      category: 'Skills',
      items: [
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
        { title: 'Bend Right', image: Images.otto.skills.bend.right, cmd: 'M 15' },
        { title: 'Bend Left', image: Images.otto.skills.bend.left, cmd: 'M 16' },
        { title: 'Shake Right', image: Images.otto.skills.shake.right, cmd: 'M 17' },
        { title: 'Shake Left', image: Images.otto.skills.shake.left, cmd: 'M 18' },
        { title: 'Jitter', image: Images.otto.skills.jitter, cmd: 'M 19' }
      ]
    },
    {
      category: 'Sounds',
      items: [
        { title: 'Beep', image: Images.otto.sounds.beep, cmd: 'K 1' },
        { title: 'Bye', image: Images.otto.sounds.disconnection, cmd: 'K 2' },
        { title: 'Surprise', image: Images.otto.sounds.surprise, cmd: 'K 3' },
        { title: 'OhOoh', image: Images.otto.sounds.ohooh, cmd: 'K 4' },
        { title: 'Cuddly', image: Images.otto.sounds.cuddly, cmd: 'K 6' },
        { title: 'Sleeping', image: Images.otto.sounds.sleeping, cmd: 'K 7' },
        { title: 'Happy', image: Images.otto.sounds.happy, cmd: 'K 8' },
        { title: 'Super Happy', image: Images.otto.sounds.superHappy, cmd: 'K 9' },
        { title: 'Sad', image: Images.otto.sounds.sad, cmd: 'K 11' },
        { title: 'Confused', image: Images.otto.sounds.confused, cmd: 'K 12' },
        { title: 'Fart1', image: Images.otto.sounds.fart1, cmd: 'K 13' },
        { title: 'Fart2', image: Images.otto.sounds.fart2, cmd: 'K 14' },
        { title: 'Fart3', image: Images.otto.sounds.fart3, cmd: 'K 15' }
      ]
    },
    {
      category: 'Moods',
      items: [
        { title: 'Happy', image: Images.otto.moods.happy, cmd: 'H 1' },
        { title: 'Super Happy', image: Images.otto.moods.superhappy, cmd: 'H 2' },
        { title: 'Sad', image: Images.otto.moods.sad, cmd: 'H 3' },
        { title: 'Sleeping', image: Images.otto.moods.sleeping, cmd: 'H 4' },
        { title: 'Fart', image: Images.otto.moods.fart, cmd: 'H 5' },
        { title: 'Confused', image: Images.otto.moods.confused, cmd: 'H 6' },
        { title: 'Love', image: Images.otto.moods.love, cmd: 'H 7' },
        { title: 'Angry', image: Images.otto.moods.angry, cmd: 'H 8' },
        { title: 'Fretful', image: Images.otto.moods.fretful, cmd: 'H 9' },
        { title: 'Magic', image: Images.otto.moods.magic, cmd: 'H 10' },
        { title: 'Wave', image: Images.otto.moods.wave, cmd: 'H 11' },
        { title: 'Victory', image: Images.otto.moods.victory, cmd: 'H 12' },
        { title: 'Fail', image: Images.otto.moods.fail, cmd: 'H 13' }
      ]
    }
  ],
  showSkillIcons: true
}
