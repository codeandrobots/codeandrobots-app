import React, { Component } from 'react'
import { View } from 'react-native'
import uuid from 'react-native-uuid'
import PropTypes from 'prop-types'
import { Videos } from 'App/Themes'

import { Container, Card, Link, Footer, Button, List } from 'App/Components'
import ListStyles from 'App/Components/Lists/Styles'
import CardStyles from 'App/Components/Card/Styles'

export default class ConnectRobotScreen extends Component {
  static propTypes = {
    video: Videos,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string),
    onLinksPress: PropTypes.arrayOf(PropTypes.func),
    onButtonPress: PropTypes.func.isRequired
  }

  render () {
    const {
      video,
      text,
      title,
      links,
      onLinksPress,
      onButtonPress
    } = this.props

    let linksExist = true

    if (links.length !== onLinksPress.length) {
      console.error('WARNING: links need a corresponding onPress function!\nLinked will not be displayed to avoid unexpected behavior')
      linksExist = false
    }

    return (
      <Container>
        <Card
          video={video}
          title={title}
          text={text}
        />
        <List scrollable>
          <View style={ListStyles.linedRow} />
          {linksExist && (
            links.map((linkStr, i) => {
              return (
                <Link key={uuid.v4()}
                  text={linkStr}
                  centered uppercase={false}
                  onPress={onLinksPress[i]}
                />
              )
            }))}
        </List>
        <Footer>
          <Button
            style={{view: [CardStyles.centered]}}
            text='Connect'
            onPress={onButtonPress}
          />
        </Footer>
      </Container>
    )
  }
}
