import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import { PlayerBottomNav } from '../Player'

storiesOf('Player', module)
  .addDecorator(FullScreenDecorator)
  .add('Bottom Nav', () => (
    <PlayerBottomNav />
  ))
  .add('Bottom Nav Light', () => (
    <PlayerBottomNav theme='light' />
  ))
