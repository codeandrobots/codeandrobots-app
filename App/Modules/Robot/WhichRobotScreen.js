import React, { Component } from 'react'
import { Container, List } from 'App/Components'
import { CardListItem } from 'App/Components/ListItems'
import { Images } from 'App/Themes'
export default class WhichRobotScreen extends Component {
  render () {
    return (
      <Container>
        <List linedRows scrollable>
          <CardListItem image={Images.robots.otto} title='Otto DIY' text='The open source robot that you can build yourself' />
          <CardListItem image={Images.robots.nybble} title='Nybble' text="The world's cutest open source robotic kitten" />
          <CardListItem image={Images.robots.simulator} title='Robot Simulator' text='No robot, no problem, simulator to the rescue' />
          <CardListItem image={Images.robots.custom_robot} title='Custom Robot' text='Let’s see if your robot has what it takes' />
        </List>
      </Container>
    )
  }
}
