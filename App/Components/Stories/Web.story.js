import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Web from '../Web'

storiesOf('Web', module)
  .add('Code&Robotos', () => (
    <Web source='http://codeandrobots.com' />
  ))
