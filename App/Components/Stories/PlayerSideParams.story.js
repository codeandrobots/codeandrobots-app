import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import { PlayerSideParams } from '../Player'

storiesOf('Player Side Params', module)
  .addDecorator(FullScreenDecorator)
  .add('Left Params', () => (
    <PlayerSideParams
      title='Speed'
      labels={['Slow', 'Normal', 'Fast']}
      defaultIndex={1}
      onPress={(index) => {}} />
  ))
