import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import Footer from '../Footer'
import BottomTabs from '../BottomTabs'

storiesOf('BottomTabs', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <Footer>
      <BottomTabs
        tabs={['MOVE', 'SKILLS', 'SOUNDS', 'MOODS']}
        onTabPress={(tab, tabIndex) => {}} />
    </Footer>
  ))
