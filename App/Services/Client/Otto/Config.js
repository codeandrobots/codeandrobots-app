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
  skills: [
    { title: 'Jitter', cmd: 'M 19' }
  ]
}
