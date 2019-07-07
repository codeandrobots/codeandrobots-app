import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Videos } from 'App/Themes'

import RobotVideo from '../RobotVideo'

storiesOf('RobotVideo', module)
  .add('Default', () => (
    <RobotVideo
      video={Videos.atlas}
    />
  ))
