import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { CenterDecorator } from './Decorators'

import { Icon } from 'App/Components'
import { Colors } from 'App/Themes'

import { IconButton } from '../Buttons'

storiesOf('IconButton', module)
  .addDecorator(CenterDecorator)
  .add('Heart', () => (
    <IconButton
      style={{buttonOutter: {backgroundColor: Colors.red}}}
      onPress={() => {}}>
      <Icon
        name='heart'
        color={Colors.red}
        size={24}
        style={{marginTop: 2}} />
    </IconButton>
  ))
  .add('Large Home', () => (
    <IconButton
      size='large'
      style={{buttonOutter: {backgroundColor: Colors.black}}}
      onPress={() => {}}>
      <Icon
        set='Material'
        name='home'
        color={Colors.black}
        size={38}
        style={{marginTop: 4}} />
    </IconButton>
  ))
  .add('Disabled', () => (
    <IconButton disabled onPress={() => {}}>
      <Icon
        name='lock'
        size={24}
        disabled
        style={{marginTop: 2}} />
    </IconButton>
  ))
