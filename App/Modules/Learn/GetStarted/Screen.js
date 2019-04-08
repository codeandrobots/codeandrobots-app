import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Carousel,
  Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
    onDone: PropTypes.func.isRequired,
    onConnectPress: PropTypes.func.isRequired
  }

  render () {
    const { connected, onDone, onConnectPress } = this.props

    const connectButton = (!connected)
      ? {title: 'Connect', onPress: onConnectPress}
      : {title: 'Next', onPress: null}

    const connectCard = (!connected)
      ? {title: 'Get connected', text: 'Let’s get you connected & ready to start playing'}
      : {title: 'Nice work, you`re connected', text: null}

    return (
      <Container>
        <Carousel
          buttons={['Next', connectButton.title, 'Done']}
          onPress={[null, connectButton.onPress, null]}
          onDone={onDone}>
          <Card image={Images.hello} title='Hi there 👋' />
          <Card
            image={Images.bluetooth}
            title={connectCard.title}
            text={connectCard.text} />
          <Card
            image={Images.done}
            title='Woot woot 🎉'
            text='You’re all setup & ready to play' />
        </Carousel>
      </Container>
    )
  }
}
