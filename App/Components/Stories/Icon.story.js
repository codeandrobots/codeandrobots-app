import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { CenterDecorator } from './Decorators'

import { Colors } from 'App/Themes'

import Icon from '../Icon'

storiesOf('Icon', module)
  .addDecorator(CenterDecorator)
  .add('Robots Love Code', () => (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Icon set='Material' name='robot' size={36} />
      <Icon name='heart' color={Colors.red} size={28} />
      <Icon name='code' size={28} />
    </View>
  ))
  .add('Disabled', () => (
    <Icon name='lock' disabled size={48} />
  ))
