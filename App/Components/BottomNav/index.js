import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { Icon, IconButton } from 'App/Components'

import s from './Styles'

export default class BottomNav extends Component {
  static propTypes = {
    onRatePress: PropTypes.func.isRequired,
    onHomePress: PropTypes.func.isRequired,
    onSettingsPress: PropTypes.func.isRequired
  }

  render () {
    const {onRatePress, onHomePress, onSettingsPress} = this.props
    return (
      <View style={s.footer}>
        <View style={s.top} />
        <View style={s.buttons}>
          <IconButton style={{button: s.iconButton}} onPress={onRatePress}>
            <Icon
              name='heart'
              size={24}
              style={{marginTop: 2}} />
          </IconButton>
          <IconButton style={{button: s.iconButton}} size='large' onPress={onHomePress}>
            <Icon
              set='Material'
              name='home'
              size={38}
              style={{marginTop: 4}} />
          </IconButton>
          <IconButton style={{button: s.iconButton}} onPress={onSettingsPress}>
            <Icon
              set='Material'
              name='dots-horizontal'
              size={32}
              style={{marginTop: 4}} />
          </IconButton>
        </View>
      </View>
    )
  }
}
