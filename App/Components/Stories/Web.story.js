import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Web from '../Web'

storiesOf('Web', module)
  .add('Code&Robots', () => (
    <Web source='http://codeandrobots.com' title='Code & Robots' />
  ))
