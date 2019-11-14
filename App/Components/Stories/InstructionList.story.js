import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'
import { InstructionList } from '../CodeLab'

const wait = {title: 'Wait', showDuration: true}
const up = {title: 'Move Up'}
const left = {title: 'Move Left'}
const right = {title: 'Move Right'}
const down = {title: 'Move Down'}

const instructions = [wait, up, left, left, down, down, right, right, up]

storiesOf('InstructionList', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <InstructionList
      instructions={instructions}
      onChangeOrder={(orderNext) => {}}
      onSlidingComplete={(instruction, value) => {}}
      onClose={() => {}} />
  ))
