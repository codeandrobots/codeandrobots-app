import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Videos } from 'App/Themes'

import AppVideo from '../AppVideo'

storiesOf('AppVideo', module)
  .add('Default', () => (
    <AppVideo
      video={Videos.atlas}
      size='default'
    />
  ))
  .add('Small', () => (
    <AppVideo
      video={Videos.atlas}
      size='small'
    />
  ))
