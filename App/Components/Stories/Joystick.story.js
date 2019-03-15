import React from 'react'
import { storiesOf } from '@storybook/react-native'

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
