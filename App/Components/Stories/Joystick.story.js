import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Colors } from 'App/Themes'

import { CenterDecorator } from './Decorators'
import Joystick from '../Joystick'

storiesOf('Joystick', module)
  .addDecorator(CenterDecorator)
  .add('Default', () => (
    <Joystick
      onDraggableMove={(touch) => {}}
      onDraggableRelease={(touch) => {}}
      onDraggableStart={() => {}} />
  ))
  .add('Light theme and small size', () => (
    <View style={{backgroundColor: Colors.primary}}>
      <Joystick
        theme='light'
        size='small'
        onDraggableMove={(touch) => {}}
        onDraggableRelease={(touch) => {}}
        onDraggableStart={() => {}} />
    </View>
  ))
