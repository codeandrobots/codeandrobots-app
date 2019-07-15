import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { PlayerBottomNav } from '../Player'

storiesOf('Player', module)
  .add('Bottom Nav', () => (
    <PlayerBottomNav />
  ))
