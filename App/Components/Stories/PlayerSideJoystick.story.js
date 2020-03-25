import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import { PlayerSideJoystick } from '../Player'

storiesOf('Player Side Joystick', module)
  .addDecorator(FullScreenDecorator)
  .add('Left Joystick', () => (
    <PlayerSideJoystick
      onDraggableMove={() => {}}
      onDraggableRelease={() => {}}
      onDraggableStart={() => {}} />
  ))
  .add('Right Joystick', () => (
    <View style={{position: 'relative', height: '100%'}}>
      <View style={{position: 'absolute', right: 0, width: 152, height: '100%'}}>
        <PlayerSideJoystick
          side='right'
          onDraggableMove={() => {}}
          onDraggableRelease={() => {}}
          onDraggableStart={() => {}} />
      </View>
    </View>
  ))
