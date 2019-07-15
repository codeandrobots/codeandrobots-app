import React, { Component } from 'react'
import { View } from 'react-native'

import { LabelRangeSliderInput } from 'App/Components'

import s from './Styles'

export default class PlayerBottomNav extends Component {
  render () {
    const { style = undefined } = this.props

    return (
      <View style={[s.view, style]}>
        <View style={s.footer}>
          <LabelRangeSliderInput
            theme='light'
            title='Speed'
            labels={['Slow', 'Normal', 'Fast']}
            onPress={(index) => {}} />
        </View>
      </View>
    )
  }
}
