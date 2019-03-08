import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'

import { Button } from '../Buttons'

storiesOf('Button', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <Button text='Click Me' onPress={() => {}} />
  ))
  .add('Disabled', () => (
    <Button text='Locked' disabled onPress={() => {}} />
  ))
