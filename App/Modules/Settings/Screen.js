import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { appInfo } from 'App/Services/Properties'

import { Container, Footer, CompactListItem, Links, Link } from 'App/Components'

import s from './Styles'

export default class Screen extends Component {
  static propTypes = {
    onChooseRobotPress: PropTypes.func.isRequired,
    onShareAppPress: PropTypes.func.isRequired,
    onFeedbackPress: PropTypes.func.isRequired,
    onFAQPress: PropTypes.func.isRequired,
    onSupportPress: PropTypes.func.isRequired,
    onAboutPress: PropTypes.func.isRequired,
    onPrivacyPress: PropTypes.func.isRequired
  }

  render () {
    const {
      onChooseRobotPress,
      onShareAppPress,
      onFeedbackPress,
      onFAQPress,
      onSupportPress,
      onAboutPress,
      onPrivacyPress} = this.props
    return (
      <Container>
        <CompactListItem title='Choose the robot you want to play with' onPress={onChooseRobotPress} />
        <CompactListItem title='Share app with a friend' onPress={onShareAppPress} />
        <CompactListItem title='Share your ideas with us' onPress={onFeedbackPress} />
        <View style={s.appVersionView}>
          <Text style={s.appVersion}>{`App Version ${appInfo()}`}</Text>
        </View>
        <Footer>
          <Links>
            <Link text='FAQ' onPress={onFAQPress} />
            <Link text='Support' onPress={onSupportPress} />
            <Link text='About' onPress={onAboutPress} />
            <Link text='Privacy' onPress={onPrivacyPress} />
          </Links>
        </Footer>
      </Container>
    )
  }
}
