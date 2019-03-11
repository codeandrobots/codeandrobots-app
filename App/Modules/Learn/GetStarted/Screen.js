import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Carousel,
  Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired,
    onLearnMorePress: PropTypes.func.isRequired
  }

  render () {
    const { onDone, onLearnMorePress } = this.props
    return (
      <Container>
        <Carousel onDone={onDone}>
          <Card image={Images.hello} title='Hi there 👋' />
          <Card
            image={Images.hello}
            text={'Sorry, the app is still under construction 🚧\n\nThe good news is you can follow along as this Beta version of the app develops over the coming weeks.'}
            button='Learn More'
            onPress={onLearnMorePress} />
        </Carousel>
      </Container>
    )
  }
}
