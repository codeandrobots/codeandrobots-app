import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Images } from 'App/Themes'

import Card from '../Card'

storiesOf('Card', module)
  .add('Hello', () => (
    <Card
      image={Images.hello}
      title='HELLO'
      text='Welcome to Code&Robots'
      button='Learn More'
      onPress={() => {}} />
  ))
