import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Metrics, Fonts } from 'App/Themes'
import {
  Container,
  Separator,
  Card,
  Link,
  Footer,
  Links } from 'App/Components'

export default class ConnectRobotScreen extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    video: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string),
    onLinkPress: PropTypes.func.isRequired,
    onConnectPress: PropTypes.func.isRequired
  }

  render () {
    const {
      image,
      video,
      text,
      title,
      links,
      onLinkPress,
      onConnectPress
    } = this.props

    return (
      <Container>
        <ScrollView>
          <Card
            style={{
              textView: {
                marginBottom: 0
              }
            }}
            textAlign='left'
            image={image}
            video={video}
            title={title}
            text={text}
          />
          <Separator />
          <Links>
            {links.map((linkStr, i) => {
              return (
                <Link
                  key={i}
                  style={{
                    view: {
                      marginVertical: Metrics.unit / 2
                    },
                    text: {
                      fontSize: Fonts.size.regular
                    }
                  }}
                  text={linkStr}
                  centered
                  uppercase={false}
                  onPress={onLinkPress}
                />
              )
            })}
          </Links>
        </ScrollView>
        <Footer style={{ paddingTop: 34 }}>
          <Card
            button='Connect'
            onPress={onConnectPress}
          />
        </Footer>
      </Container>
    )
  }
}
