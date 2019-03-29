import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { CodeLabNav } from '../CodeLab'

storiesOf('CodeLab Nav', module)
  .add('Default', () => (
    <CodeLabNav onPress={(instruction) => {}} onRun={() => {}} />
  ))
