import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Card, Container, List, Footer } from 'App/Components'
import { CardListItem } from 'App/Components/ListItems'
// import { Images } from 'App/Themes'
export default class BuildRobotScreen extends Component {
  render () {
    const { list } = this.props

    return (
      <Container>
        <ScrollView style={{ marginBottom: 114 }}>
          <List linedRows scrollable>
            <CardListItem image={list.stepOne.image} title={list.stepOne.title} text={list.stepOne.text} />
            <CardListItem image={list.stepTwo.image} title={list.stepTwo.title} text={list.stepTwo.text} />
            <CardListItem image={list.stepThree.image} title={list.stepThree.title} text={list.stepThree.text} />
            <CardListItem image={list.stepFour.image} title={list.stepFour.title} text={list.stepFour.text} />
          </List>
        </ScrollView>
        <Footer style={{ paddingTop: 34 }}>
          <Card
            button='Download Instructions'
          />
        </Footer>
      </Container>
    )
  }
}
