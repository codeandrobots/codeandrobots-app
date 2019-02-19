import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { appInfo } from 'App/Services/Properties'

import { Container, Footer, Setting, Links, Link } from 'App/Components'

import s from './Styles'

export default class Screen extends Component {
  static propTypes = {
    onShareAppPress: PropTypes.func.isRequired,
    onFeedbackPress: PropTypes.func.isRequired,
    onFAQPress: PropTypes.func.isRequired,
    onSupportPress: PropTypes.func.isRequired,
    onAboutPress: PropTypes.func.isRequired
  }

  render () {
    const {
      onShareAppPress,
      onFeedbackPress,
      onFAQPress,
      onSupportPress,
      onAboutPress} = this.props
    return (
      <Container>
        <Setting text='Share app with a friend' onPress={onShareAppPress} />
        <Setting text='Share your ideas with us' onPress={onFeedbackPress} />
        <View style={s.appVersionView}>
          <Text style={s.appVersion}>{`App Version ${appInfo()}`}</Text>
        </View>
        <Footer>
          <Links>
            <Link text='FAQ' onPress={onFAQPress} />
            <Link text='Support' onPress={onSupportPress} />
            <Link text='About' onPress={onAboutPress} />
          </Links>
        </Footer>
      </Container>
    )
  }
}
