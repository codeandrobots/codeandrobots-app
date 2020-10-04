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
  Links,
  List,
  CompactListItem } from 'App/Components'

export default class ConnectRobotScreen extends Component {
  static propTypes = {
    type: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    video: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })),
    onLinkPress: PropTypes.func.isRequired,
    onNamePress: PropTypes.func.isRequired,
    onChangePicturePress: PropTypes.func.isRequired,
    onSetupPress: PropTypes.func.isRequired,
    onConnectPress: PropTypes.func.isRequired
  }

  render () {
    const {
      type,
      image,
      video,
      title,
      text,
      links,
      onLinkPress,
      onNamePress,
      onChangePicturePress,
      onSetupPress,
      onConnectPress
    } = this.props

    const isCustomRobot = (type === 'custom')

    const cardTitle = (!isCustomRobot) ? title : null

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
            title={cardTitle}
            text={text}
          />
          {!isCustomRobot && <Separator />}
          {links &&
            <Links>
              {links.map((link, i) => {
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
                    text={link.title}
                    centered
                    uppercase={false}
                    onPress={() => { onLinkPress(link) }}
                  />
                )
              })}
            </Links>
          }
          {isCustomRobot &&
            <List style={{marginHorizontal: Metrics.unit}}>
              <CompactListItem title={title} onPress={onNamePress} />
              <CompactListItem title='Change picture' onPress={onChangePicturePress} />
              <CompactListItem title='Setup' onPress={onSetupPress} />
            </List>
          }
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
