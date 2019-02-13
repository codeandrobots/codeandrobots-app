import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import BottomNav from '../BottomNav'

storiesOf('BottomNav', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <BottomNav />
  ))
