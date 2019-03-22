import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Instruction } from '../CodeLab'

storiesOf('Instruction', module)
  .add('Action', () => (
    <Instruction icon='arrow-up' title='Move Forward' onClose={() => {}} />
  ))
  .add('Sensor', () => (
    <Instruction type='sensor' icon='thermometer' title='Read Temperature' onClose={() => {}} />
  ))
  .add('Control', () => (
    <Instruction type='control' title='If' onClose={() => {}} />
  ))
  .add('Data', () => (
    <Instruction type='data' icon='eyedropper' title='Set Color' onClose={() => {}} />
  ))
