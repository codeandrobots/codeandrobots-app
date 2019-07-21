import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Colors, Metrics } from 'App/Themes'

import Decorator from './Decorators'

import { Button, PlayerButton } from '../Buttons'

storiesOf('Button', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <Button text='Click Me' onPress={() => {}} />
  ))
  .add('Disabled', () => (
    <Button text='Locked' disabled onPress={() => {}} />
  ))
  .add('Player', () => (
    <PlayerButton text='Jump' onPress={() => {}} />
  ))
  .add('Player Light', () => (
    <View style={{backgroundColor: Colors.primary, padding: Metrics.unit}}>
      <PlayerButton theme='light' text='Jump' onPress={() => {}} />
    </View>
  ))
