import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { LabelRangeSliderInput, PlayerButton } from 'App/Components'

import s from './Styles'

export default class PlayerBottomNav extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render () {
    const { style = undefined, theme = 'default' } = this.props

    return (
      <View style={[s.footer, style]}>
        <LabelRangeSliderInput
          theme={theme}
          title='Speed'
          labels={['Slow', 'Normal', 'Fast']}
          defaultIndex={1}
          onPress={(index) => {}} />
        <View style={s.skills}>
          <View style={s.buttons}>
            <PlayerButton theme={theme} text='Jump' onPress={() => {}} />
            <PlayerButton theme={theme} text='Shuffle' onPress={() => {}} />
            <PlayerButton theme={theme} text='Bow' onPress={() => {}} />
          </View>
          <View style={s.buttons}>
            <PlayerButton theme={theme} text='Spin' onPress={() => {}} />
            <PlayerButton theme={theme} text='Dance' onPress={() => {}} />
            <PlayerButton theme={theme} text='Moonwalk' onPress={() => {}} />
          </View>
          <View style={s.buttons}>
            <PlayerButton theme={theme} text='Chill' onPress={() => {}} />
            <PlayerButton theme={theme} disabled onPress={() => {}} />
            <PlayerButton theme={theme} disabled onPress={() => {}} />
          </View>
        </View>
      </View>
    )
  }
}
