import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { isIOSProduction } from 'App/Services/Properties'

import { Container, List, ListItem, BottomNav } from 'App/Components'

export default class Screen extends Component {
  static propTypes = {
    onNavigatePress: PropTypes.func.isRequired
  }

  render () {
    const { onNavigatePress } = this.props
    return (
      <Container>
        <List>
          <ListItem
            title='Play & Explore'
            text='Let’s play'
            button='Play'
            onPress={() => { onNavigatePress('PlayerScreen') }} />
          <ListItem
            title='Code Lab'
            text='Let’s see what you can do'
            button='Code'
            onPress={() => { onNavigatePress('CodeLabScreen') }} />
          <ListItem
            title='Learn'
            text='You’ll be a guru in no time'
            button='Learn'
            onPress={() => { onNavigatePress('LearnScreen') }} />
          {!isIOSProduction() &&
            <ListItem
              title='Lab'
              text='Get under the hood'
              button='Lab'
              onPress={() => { onNavigatePress('LabScreen') }} />
          }
        </List>
        <BottomNav
          onRatePress={() => { onNavigatePress('RateScreen') }}
          onHomePress={() => { onNavigatePress('PlayerScreen') }}
          onSettingsPress={() => { onNavigatePress('SettingsScreen') }} />
      </Container>
    )
  }
}
