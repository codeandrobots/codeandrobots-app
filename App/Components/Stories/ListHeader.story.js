import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ListHeader from '../ListHeaders'

storiesOf('ListHeader', module)
  .add('Default', () => (
    <ListHeader title='Shopping List' />
  ))
  .add('Todos', () => (
    <ListHeader title='Todos' count={6} completed={2} />
  ))
