import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import { PlayerBottomNav } from '../Player'

const slider = {
  title: 'Speed',
  labels: ['Slow', 'Normal', 'Fast'],
  defaultIndex: 1
}

const skills = [
  {title: 'Jump'},
  {title: 'Shuffle'},
  {title: 'Bow'},
  {title: 'Spin'},
  {title: 'Dance'},
  {title: 'Moonwalk'},
  {title: 'Chill'}
]

storiesOf('Player', module)
  .addDecorator(FullScreenDecorator)
  .add('Bottom Nav', () => (
    <PlayerBottomNav
      slider={slider}
      skills={skills}
      onSliderPress={() => {}}
      onSkillPress={() => {}} />
  ))
  .add('Bottom Nav Light', () => (
    <PlayerBottomNav
      theme='light'
      slider={slider}
      skills={skills}
      onSliderPress={() => {}}
      onSkillPress={() => {}} />
  ))
