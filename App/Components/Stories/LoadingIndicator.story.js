import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Colors } from 'App/Themes'

import LoadingIndicator from '../LoadingIndicator'

storiesOf('LoadingIndicator', module)
  .add('Default', () => (
    <LoadingIndicator />
  ))
  .add('Red', () => (
    <LoadingIndicator color={Colors.red} />
  ))
  .add('Large', () => (
    <LoadingIndicator size='large' />
  ))
