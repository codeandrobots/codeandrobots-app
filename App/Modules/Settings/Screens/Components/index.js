import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Footer, Setting, Links, Link } from 'App/Components'

export default class Screen extends Component {
  static propTypes = {
    onNotificationsPress: PropTypes.func.isRequired,
    onShareAppPress: PropTypes.func.isRequired,
    onFeedbackPress: PropTypes.func.isRequired
  }

  render () {
    const {
      onNotificationsPress,
      onShareAppPress,
      onFeedbackPress} = this.props
    return (
      <Container>
        <Setting text='Notifications' onPress={onNotificationsPress} />
        <Setting text='Share app with a friend' onPress={onShareAppPress} />
        <Setting text='Share your ideas with us' onPress={onFeedbackPress} />
        <Footer>
          <Links>
            <Link text='FAQ' onPress={() => {}} />
            <Link text='Support' onPress={() => {}} />
            <Link text='About' onPress={() => {}} />
          </Links>
        </Footer>
      </Container>
    )
  }
}
