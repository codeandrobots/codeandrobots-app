import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, List, Footer, Card } from 'App/Components'
import { CardListItem } from 'App/Components/ListItems'
import { Images } from 'App/Themes'

export default class WhichRobotScreen extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { onPress } = this.props
    return (
      <Container>
        <List linedRows scrollable>
          <CardListItem
            image={Images.robots.otto}
            title='Otto DIY'
            text='The open source robot that you can build yourself'
            onPress={() => { onPress('otto') }} />
          <CardListItem
            image={Images.robots.nybble}
            title='Nybble'
            text="The world's cutest open source robotic kitten"
            onPress={() => { onPress('nybble') }} />
          <CardListItem
            image={Images.robots.simulator}
            title='Robot Simulator'
            text='No robot, no problem, simulator to the rescue'
            onPress={() => { onPress('simulator') }} />
          {/*
          <CardListItem
            image={Images.robots.custom_robot}
            title='Custom Robot'
            text='Let’s see if your robot has what it takes'
            onPress={() => { onPress('custom') }} />
          */}
        </List>
        <Footer>
          <Card text='Choose the robot you want to play with' />
        </Footer>
      </Container>
    )
  }
}
