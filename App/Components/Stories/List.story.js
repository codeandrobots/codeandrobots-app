import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Images } from 'App/Themes'

import List from '../Lists'
import ListHeader from '../ListHeaders'
import { ListItem, SquareListItem, CompactListItem } from '../ListItems'

storiesOf('List', module)
  .add('Default', () => (
    <List title='Explore'>
      <ListItem image={Images.controls} title='Drive Mode' text='Let’s get moving' onPress={() => {}} />
      <ListItem icon='message-text' iconSet='Material' iconStyle={{marginTop: 4}} title='Beep beep' text='Beep bop boopity beep' onPress={() => {}} />
    </List>
  ))
  .add('Games', () => (
    <List title='Games' cols={2}>
      <SquareListItem icon='play' iconStyle={{marginLeft: 4}} title='Drive' text='Vroom vroom' onPress={() => {}} />
      <SquareListItem icon='play' iconStyle={{marginLeft: 4}} title='Dance' text='Let’s boogie' onPress={() => {}} />
      <SquareListItem icon='play' iconStyle={{marginLeft: 4}} title='Find a friend' text='Humans are nice' disabled onPress={() => {}} />
    </List>
  ))
  .add('Lessons', () => (
    <List>
      <ListHeader title='Lessons' count={3} completed={1} />
      <CompactListItem icon='check-circle-o' title='Get started' onPress={() => {}} />
      <CompactListItem icon='circle-o' title='Play a game' onPress={() => {}} />
      <CompactListItem icon='circle-o' title='Code Remix' disabled onPress={() => {}} />
    </List>
  ))
