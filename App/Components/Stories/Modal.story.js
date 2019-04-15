import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'

import { StyleSheet as s } from 'App/Themes'

import Modal from '../Modal'

const navigation = {navigate: () => {}}

storiesOf('Modal', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <Modal navigation={navigation} show>
      <View style={s.centered}>
        <Text style={s.text}>I am a modal popup 👋</Text>
      </View>
    </Modal>
  ))
  .add('Not Ready', () => (
    <Modal navigation={navigation} show template='NotReady' />
  ))
  .add('Not Connected', () => (
    <Modal navigation={navigation} show template='NotConnected' />
  ))
  .add('Problems Connecting', () => (
    <Modal navigation={navigation} show template='ProblemsConnecting' />
  ))
