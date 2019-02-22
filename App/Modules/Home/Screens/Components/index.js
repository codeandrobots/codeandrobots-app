import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Card, BottomNav } from 'App/Components'

import { Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    onLearnMorePress: PropTypes.func.isRequired,
    onRatePress: PropTypes.func.isRequired,
    onHomePress: PropTypes.func.isRequired,
    onSettingsPress: PropTypes.func.isRequired
  }

  render () {
    const {
      onLearnMorePress,
      onRatePress,
      onHomePress,
      onSettingsPress} = this.props
    return (
      <Container>
        <Card
          image={Images.hello}
          title='HELLO'
          text={'The app is ready! Sorry, almost ready :)\n\nThe good news is you can follow along as this Beta version of the app develops over the coming weeks.'}
          button='Learn More'
          onPress={onLearnMorePress} />
        <BottomNav
          onRatePress={onRatePress}
          onHomePress={onHomePress}
          onSettingsPress={onSettingsPress} />
      </Container>
    )
  }
}
