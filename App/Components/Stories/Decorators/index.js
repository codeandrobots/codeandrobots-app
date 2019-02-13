import React from 'react'
import { View } from 'react-native'

import { Colors } from 'App/Themes'

export const CenterDecorator = (getStory) => (
  <View style={{ flex: 1, alignItems: 'center' }}>{getStory()}</View>
)

export const FullScreenDecorator = (getStory) => (
  <View style={{ backgroundColor: Colors.offwhite, height: '100%' }}>{getStory()}</View>
)
