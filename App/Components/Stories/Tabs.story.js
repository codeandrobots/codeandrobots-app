import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import Footer from '../Footer'
import Tabs from '../Tabs'

storiesOf('Tabs', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <Footer>
      <Tabs
        tabs={['MOVE', 'SKILLS', 'SOUNDS', 'MOODS']}
        onTabPress={(tab, tabIndex) => {}} />
    </Footer>
  ))
  .add('Light Theme', () => (
    <Footer>
      <Tabs
        theme='light'
        tabs={['MOVE', 'SKILLS', 'SOUNDS', 'MOODS']}
        onTabPress={(tab, tabIndex) => {}} />
    </Footer>
  ))
  .add('Primary Theme', () => (
    <Tabs
      theme='primary'
      tabs={['MOVE', 'SKILLS', 'SOUNDS', 'MOODS']}
      onTabPress={(tab, tabIndex) => {}} />
  ))
