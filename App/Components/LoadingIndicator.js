import React from 'react'
import { View, ActivityIndicator, Platform } from 'react-native'

export const LoadingIndicator = ({
  containerStyle = undefined,
  color = (Platform.OS === 'ios') ? undefined : '#E7E8E7',
  size = 'small' }) =>
  (
    <View style={containerStyle}>
      <ActivityIndicator animating size={size} color={color} />
    </View>
  )
