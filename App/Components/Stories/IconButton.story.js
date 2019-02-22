import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { CenterDecorator } from './Decorators'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors } from 'App/Themes'

import { IconButton } from '../Buttons'

storiesOf('IconButton', module)
  .addDecorator(CenterDecorator)
  .add('Heart', () => (
    <IconButton
      style={{buttonOutter: {backgroundColor: Colors.red}}}
      onPress={() => {}}>
      <FontAwesomeIcon
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
      <MaterialIcon
        name='home'
        color={Colors.black}
        size={38}
        style={{marginTop: 4}} />
    </IconButton>
  ))
  .add('Disabled', () => (
    <IconButton disabled onPress={() => {}}>
      <FontAwesomeIcon
        name='lock'
        color={Colors.icon_disabled}
        size={24}
        style={{marginTop: 2}} />
    </IconButton>
  ))
