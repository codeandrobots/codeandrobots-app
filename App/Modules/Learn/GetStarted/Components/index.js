import React, { Component } from 'react'

import {
  Container,
  Carousel,
  Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class Screen extends Component {
  onDone = () => {
    this.props.navigation.goBack()
  }

  onLearnMorePress = () => {
    this.props.navigation.navigate('WebScreen', {
      source: 'http://www.codeandrobots.com'
    })
  }

  render () {
    return (
      <Container>
        <Carousel onDone={this.onDone}>
          <Card image={Images.hello} title='Hi there 👋' />
          <Card
            image={Images.hello}
            text={'Sorry, the app is still under construction 🚧\n\nThe good news is you can follow along as this Beta version of the app develops over the coming weeks.'}
            button='Learn More'
            onPress={this.onLearnMorePress} />
        </Carousel>
      </Container>
    )
  }
}
