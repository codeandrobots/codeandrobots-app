import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class NotConnected extends Component {
  static propTypes = {
    onHidePress: PropTypes.func,
    onBack: PropTypes.func
  }

  onConnectPress = () => {
    const { navigation, onHidePress, onBack } = this.props
    if (onHidePress) {
      onHidePress()
    }
    navigation.navigate('ConnectScreen', { onBack })
  }

  render () {
    return (
      <Card
        image={Images.bluetooth}
        text={'Whoops, you need to connect first.'}
        button='Connect'
        onPress={this.onConnectPress} />
    )
  }
}
