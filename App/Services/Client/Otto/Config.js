import { Images } from 'App/Themes'

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
    { title: 'Up Down', image: Images.otto.skills.updown, cmd: 'M 5' },
    { title: 'Moonwalk Right', image: Images.otto.skills.moonwalk.right, cmd: 'M 6' },
    { title: 'Moonwalk Left', image: Images.otto.skills.moonwalk.left, cmd: 'M 7' },
    { title: 'Swing', image: Images.otto.skills.swing, cmd: 'M 8' },
    { title: 'Cross Right', image: Images.otto.skills.cross.right, cmd: 'M 9' },
    { title: 'Cross Left', image: Images.otto.skills.cross.left, cmd: 'M 10' },
    { title: 'Flap Front', image: Images.otto.skills.flap.front, cmd: 'M 12' },
    { title: 'Flap Back', image: Images.otto.skills.flap.back, cmd: 'M 13' },
    { title: 'Tiptoe', image: Images.otto.skills.tiptoe, cmd: 'M 14' },
    { title: 'Bend Right', image: Images.otto.skills.bend.right, cmd: 'M 15' },
    { title: 'Bend Left', image: Images.otto.skills.bend.left, cmd: 'M 16' },
    { title: 'Shake Right', image: Images.otto.skills.shake.right, cmd: 'M 17' },
    { title: 'Shake Left', image: Images.otto.skills.shake.left, cmd: 'M 18' },
    { title: 'Jitter', image: Images.otto.skills.jitter, cmd: 'M 19' },
    { title: 'Ascend', image: Images.otto.skills.ascend, cmd: 'M 20' }
  ],
  showSkillIcons: true
}
