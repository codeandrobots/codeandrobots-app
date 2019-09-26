import { Images } from 'App/Themes'

export const Gaits = {
  Crawl: 0,
  Walk: 1,
  Trot: 2
}

export default {
  name: 'Nybble',
  image: Images.robots.nybble,
  description: 'The world\'s cutest open source robotic kitten',
  links: [
    {
      title: 'Build Instructions',
      url: 'https://docs.google.com/document/d/1DPbqiWkSWnGqmX-0FWCXq34XgnmIYZHJG8xMl52ginU'
    },
    {
      title: 'Build Video',
      url: 'https://www.youtube.com/playlist?list=PLHMFXft_rV6MJ-BhDN-O5I_u4YeAie30n'
    },
    {
      title: 'Website',
      url: 'https://www.petoi.com'
    }
  ],
  connection: { type: 'bluetooth' },
  features: {
    drive: true,
    beep: false
  },
  params: [
    {
      title: 'Gait',
      values: ['Crawl', 'Walk', 'Trot'],
      defaultIndex: 1
    }
  ],
  commands: {
    stop: 'kbalance',
    walk: {
      forwards: 'kwk',
      right: 'kwkR',
      left: 'kwkL',
      backwards: 'kbk'
    },
    back: {
      right: 'kbkR',
      left: 'kbkL'
    },
    crawl: {
      forwards: 'kcr',
      right: 'kcrR',
      left: 'kcrL'
    },
    trot: {
      forwards: 'ktr'
    }
  },
  skills: [
    {
      category: 'Skills',
      items: [
        { title: 'Rest', cmd: 'krest' },
        { title: 'Balance', cmd: 'kbalance' },
        { title: 'Sit', cmd: 'ksit' },
        { title: 'Hi', cmd: 'khi' },
        { title: 'Stretch', cmd: 'kstr' },
        { title: 'Pee', cmd: 'kpee' },
        { title: 'Push Up', cmd: 'kpu' },
        { title: 'Turbo', cmd: 'ktb' },
        { title: 'Recover', cmd: 'krc' }
      ]
    }
  ]
}
