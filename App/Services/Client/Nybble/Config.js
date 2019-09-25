export const Gaits = {
  Crawl: 0,
  Walk: 1,
  Trot: 2
}

export default {
  name: 'Nybble',
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
