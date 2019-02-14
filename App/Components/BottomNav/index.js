import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IconButton } from 'App/Components'
import { Colors } from 'App/Themes'

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
          <IconButton onPress={onRatePress}>
            <FontAwesomeIcon
              name='heart'
              color={Colors.footer.button.nav.background}
              size={24}
              style={{marginTop: 2}} />
          </IconButton>
          <IconButton size='large' onPress={onHomePress}>
            <MaterialIcon
              name='home'
              color={Colors.footer.button.nav.background}
              size={38}
              style={{marginTop: 4}} />
          </IconButton>
          <IconButton onPress={onSettingsPress}>
            <MaterialIcon
              name='dots-horizontal'
              color={Colors.footer.button.nav.background}
              size={32}
              style={{marginTop: 4}} />
          </IconButton>
        </View>
      </View>
    )
  }
}
