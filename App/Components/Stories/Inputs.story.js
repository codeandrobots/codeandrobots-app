import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Colors } from 'App/Themes'

import Decorator from './Decorators'

import { LabelRangeSliderInput } from '../Inputs'

storiesOf('Inputs', module)
  .addDecorator(Decorator)
  .add('Range Slider with 3 Labels', () => (
    <LabelRangeSliderInput
      title='Speed'
      labels={['Slow', 'Normal', 'Fast']}
      onPress={(index) => {}} />
  ))
  .add('Range Slider with 4 Labels', () => (
    <LabelRangeSliderInput
      title='Gait'
      defaultIndex={1}
      labels={['Crawl', 'Walk', 'Trot', 'Bound']}
      onPress={(index) => {}} />
  ))
  .add('Range Slider Light Theme', () => (
    <LabelRangeSliderInput
      theme='light'
      title='Speed'
      labels={['Slow', 'Normal', 'Fast']}
      defaultIndex={2}
      style={{backgroundColor: Colors.primary}}
      onPress={(index) => {}} />
  ))
