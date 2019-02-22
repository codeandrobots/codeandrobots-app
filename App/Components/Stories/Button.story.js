import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Button } from '../Buttons'

storiesOf('Button', module)
  .add('Default', () => (
    <Button text='Click Me' onPress={() => {}} />
  ))
  .add('Disabled', () => (
    <Button text='Locked' disabled onPress={() => {}} />
  ))
