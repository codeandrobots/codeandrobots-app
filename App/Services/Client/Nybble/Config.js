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
      values: ['Crawl', 'Walk', 'Trot', 'Bound'],
      defaultIndex: 1
    }
  ],
  skills: [
    { title: 'Rest', cmd: 'krest' },
    { title: 'Balance', cmd: 'kbalance' },
    { title: 'Sit', cmd: 'ksit' },
    { title: 'Hi', cmd: 'khi' },
    { title: 'Pee', cmd: 'kpee' },
    { title: 'Push Up', cmd: 'kpu' },
    { title: 'Turbo', cmd: '' },
    { title: 'Recover', cmd: '' }
  ]
}
