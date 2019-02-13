import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { NavButton } from '../Buttons'

storiesOf('NavButton', module)
  .add('Default', () => (
    <NavButton onPress={() => {}} text='Done' />
  ))
