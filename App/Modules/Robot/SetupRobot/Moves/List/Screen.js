import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, CompactListItem } from 'App/Components'
import { capitalizeFirstLetter } from 'App/Services/TextUtils'

export default class SetupRobotMovesScreen extends Component {
  static propTypes = {
    commands: PropTypes.object.isRequired,
    onCommandPress: PropTypes.func.isRequired
  }

  render () {
    const { commands, onCommandPress } = this.props
    return (
      <Container>
        {commands && Object.entries(commands).map(([command, value]) =>
          <CompactListItem
            key={`${command}-${value}`}
            title={`${capitalizeFirstLetter(command)}`}
            subtitle={`${value || ' '}`}
            onPress={() => {
              onCommandPress(command, value)
            }} />
        )}
      </Container>
    )
  }
}
