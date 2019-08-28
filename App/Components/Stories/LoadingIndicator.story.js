import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import { Colors } from 'App/Themes'

import LoadingIndicator from '../LoadingIndicator'

storiesOf('LoadingIndicator', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <LoadingIndicator />
  ))
  .add('Red', () => (
    <LoadingIndicator color={Colors.red} />
  ))
  .add('Large', () => (
    <LoadingIndicator size='large' />
  ))
