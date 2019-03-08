import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'

import { StyleSheet as s } from 'App/Themes'

import Modal from '../Modal'

storiesOf('Modal', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <Modal show onHidePress={() => {}}>
      <View style={s.centered}>
        <Text style={s.text}>I am a modal popup 👋</Text>
      </View>
    </Modal>
  ))
  .add('Not Ready', () => (
    <Modal show onHidePress={() => {}} template='NotReady' />
  ))
