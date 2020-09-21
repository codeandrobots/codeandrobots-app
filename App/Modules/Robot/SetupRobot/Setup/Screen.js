import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, CompactListItem } from 'App/Components'
import { capitalizeFirstLetter } from 'App/Services/TextUtils'

export default class SetupRobotScreen extends Component {
  static propTypes = {
    setup: PropTypes.object.isRequired,
    onConnectionPress: PropTypes.func.isRequired,
    onMovesPress: PropTypes.func.isRequired,
    onSkillsPress: PropTypes.func.isRequired
  }

  render () {
    const {
      setup,
      onConnectionPress,
      onMovesPress,
      onSkillsPress } = this.props
    return (
      <Container>
        <CompactListItem title='Connection' subtitle={`${capitalizeFirstLetter(setup.connection.type)}`} onPress={onConnectionPress} />
        <CompactListItem key={`moves-${Object.entries(setup.commands).length}`} title='Moves' subtitle={`${Object.entries(setup.commands).length}`} onPress={onMovesPress} />
        <CompactListItem key={`commands-${Object.entries(setup.skills).length}`} title='Commands' subtitle={`${setup.skills.length}`} onPress={onSkillsPress} />
      </Container>
    )
  }
}
