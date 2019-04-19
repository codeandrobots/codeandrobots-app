import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class IsYourDeviceSupported extends Component {
  static propTypes = {
    onHidePress: PropTypes.func
  }

  onLinkPress = () => {
    const { navigation, onHidePress } = this.props
    if (onHidePress) {
      onHidePress()
    }
    navigation.navigate('WebScreen', {
      source: 'https://www.ottodiy.com',
      title: 'Otto DIY'
    })
  }

  render () {
    return (
      <Card
        image={Images.bluetooth}
        text={'The Beta app currently supports connecting to the Otto DIY open source robot or to the Code & Robots simulator.\n\nThe aim of the Code & Robots app is to support all of the most popular robots and more will be added soon 🤞'}
        link='What is the Otto DIY robot?'
        onLinkPress={this.onLinkPress} />
    )
  }
}
