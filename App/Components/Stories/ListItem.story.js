import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Images } from 'App/Themes'

import { ListItem } from '../ListItems'

storiesOf('ListItem', module)
  .add('Default', () => (
    <ListItem title='Play & Explore' text='Let’s play' button='Play' onPress={() => {}} />
  ))
  .add('Beep', () => (
    <ListItem icon='message-text' iconSet='Material' iconStyle={{marginTop: 4}} title='Beep beep' text='Beep bop boopity beep' onPress={() => {}} />
  ))
  .add('Drive', () => (
    <ListItem image={Images.controls} title='Drive Mode' text='Let’s get moving' onPress={() => {}} />
  ))
  .add('Disabled', () => (
    <ListItem title='Pro Level' text='Go up a level' button='Locked' disabled onPress={() => {}} />
  ))
  .add('Square', () => (
    <ListItem format='square' icon='play' iconStyle={{marginLeft: 4}} title='Dance' text='Let’s boogie' onPress={() => {}} />
  ))
  .add('Square Disabled', () => (
    <ListItem format='square' icon='lock' title='Pro Level' text='Go up a level' disabled onPress={() => {}} />
  ))
