import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Carousel,
  Card
} from 'App/Components'

import { Images, Videos } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired
  }

  render () {
    const { onDone } = this.props

    return (
      <Container>
        <Carousel
          buttons={['Next', 'Next', 'Done']}
          onPress={[null, null, null]}
          onDone={onDone}>
          <Card
            video={Videos.atlas}
            title='Code & Robots'
            text='Where your robots come alive'
          />
          <Card
            image={Images.hello}
            title='Robots await your commands'
            text='Otto & Nybble supported out of the box, more robots coming soon!'
          />
          <Card
            image={Images.done}
            title='Lots more to come! 🎉'
            text='Learn to code, build your own robot and so much more...'
          />
        </Carousel>
      </Container>
    )
  }
}
