import React from 'react'
import { View, Image } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'

import { StyleSheet as s, Images } from 'App/Themes'

import Modal from '../Modal'

storiesOf('Modal', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <Modal show onHidePress={() => {}}>
      <View style={s.centered}>
        <Image source={Images.hello} />
      </View>
    </Modal>
  ))
