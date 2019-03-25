import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Instructions } from '../CodeLab'

const up = {icon: 'arrow-up', title: 'Move Up'}
const left = {icon: 'arrow-left', title: 'Move Left'}
const right = {icon: 'arrow-right', title: 'Move Right'}
const down = {icon: 'arrow-down', title: 'Move Down'}

const instructions = [up, left, left, down, down, right, right, up]

storiesOf('Instructions', module)
  .add('Default', () => (
    <Instructions instructions={instructions} onChangeOrder={(orderNext) => {}} />
  ))
