import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Container, OptionListItem } from 'App/Components'

import s from './Styles'

export default class SetupRobotConnectionScreen extends Component {
  static propTypes = {
    connection: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render () {
    return (
      <Container>
        <OptionListItem title='Bluetooth' value='bluetooth' selected onPress={() => {}} />
        <View style={s.view}>
          <Text style={s.text}>Wifi support coming soon</Text>
        </View>
      </Container>
    )
  }
}
