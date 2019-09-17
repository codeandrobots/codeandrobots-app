import React, { Component } from 'react'

import { Container, Video } from 'App/Components'

export default class ConnectRobotScreen extends Component {
  render () {
    const { data } = this.props

    return (
      <Container>
        <Video
          video={data.video}
        />
      </Container>
    )
  }
}
