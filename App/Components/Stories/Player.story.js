import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import { PlayerBottomNav } from '../Player'

const slider = {
  title: 'Speed',
  labels: ['Slow', 'Normal', 'Fast'],
  defaultIndex: 1,
  onPress: () => {}
}

const skills = [
  {title: 'Jump', onPress: () => {}},
  {title: 'Shuffle', onPress: () => {}},
  {title: 'Bow', onPress: () => {}},
  {title: 'Spin', onPress: () => {}},
  {title: 'Dance', onPress: () => {}},
  {title: 'Moonwalk', onPress: () => {}},
  {title: 'Chill', onPress: () => {}}
]

storiesOf('Player', module)
  .addDecorator(FullScreenDecorator)
  .add('Bottom Nav', () => (
    <PlayerBottomNav slider={slider} skills={skills} />
  ))
  .add('Bottom Nav Light', () => (
    <PlayerBottomNav theme='light' slider={slider} skills={skills} />
  ))
