import React, { Component } from 'react'
import { View } from 'react-native'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IconButton } from 'App/Components'
import { Colors } from 'App/Themes'

import s from './Styles'

export default class BottomNav extends Component {
  render () {
    return (
      <View style={s.footer}>
        <View style={s.top} />
        <View style={s.buttons}>
          <IconButton>
            <FontAwesomeIcon
              name='heart'
              color={Colors.footer.button.nav.background}
              size={24}
              style={{marginTop: 2}} />
          </IconButton>
          <IconButton size='large'>
            <MaterialIcon
              name='home'
              color={Colors.footer.button.nav.background}
              size={38}
              style={{marginTop: 4}} />
          </IconButton>
          <IconButton>
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
