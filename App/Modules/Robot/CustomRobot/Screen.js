import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Metrics } from 'App/Themes'
import {
  Container,
  Separator,
  Card,
  Link,
  Footer,
  Links } from 'App/Components'

export default class CustomRobotScreen extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    video: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      config: PropTypes.object.isRequired
    })),
    onLinkPress: PropTypes.func.isRequired
  }

  render () {
    const {
      image,
      video,
      title,
      text,
      links,
      onLinkPress
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
          {links &&
            <Links>
              {links.map((link, i) => {
                return (
                  <Link
                    key={i}
                    text={link.title}
                    centered
                    uppercase={false}
                    onPress={() => { onLinkPress(link) }}
                  />
                )
              })}
            </Links>
          }
        </ScrollView>
        <Footer style={{ paddingTop: 34 }}>
          <Card
            title='ADD A CUSTOM ROBOT'
            text={'Choose between adding a custom robot from scratch or based on the OttoDIY or Nybble robots.'}
            textAlign='left'
            style={{textView: {marginBottom: Metrics.unit}}} />
        </Footer>
      </Container>
    )
  }
}
