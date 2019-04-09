import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class NotReady extends Component {
  static propTypes = {
    onHidePress: PropTypes.func
  }

  onLearnMorePress = () => {
    const { navigation, onHidePress } = this.props
    if (onHidePress) {
      onHidePress()
    }
    navigation.navigate('WebScreen', {
      source: 'http://www.codeandrobots.com',
      title: 'Code & Robots'
    })
  }

  render () {
    return (
      <Card
        image={Images.hello}
        text={'Sorry, that feature is still under construction 🚧\n\nThe good news is you can follow along as this Beta version of the app develops over the coming weeks.'}
        button='Learn More'
        onPress={this.onLearnMorePress} />
    )
  }
}
