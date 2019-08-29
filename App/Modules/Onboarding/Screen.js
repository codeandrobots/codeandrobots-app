import React, { Component } from 'react'

import {
  Container,
  Carousel,
  Card
} from 'App/Components'

import { Colors, Metrics, Images, Videos } from 'App/Themes'

export default class Screen extends Component {

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
            text='Where your robots comes alive'
            style={{title_center: {fontSize: 128} }}/>
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