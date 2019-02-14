import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Setting from '../Setting'

storiesOf('Setting', module)
  .add('Notifications', () => (
    <Setting text='Notifications' onPress={() => {}} />
  ))
