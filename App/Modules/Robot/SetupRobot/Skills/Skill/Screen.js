import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, CompactListItem, Footer, Card } from 'App/Components'
import { capitalizeFirstLetter } from 'App/Services/TextUtils'

export default class SetupRobotSkillScreen extends Component {
  static propTypes = {
    skill: PropTypes.object.isRequired,
    onSkillPress: PropTypes.func.isRequired,
    onAddPress: PropTypes.func.isRequired
  }

  render () {
    const { skill: { items }, onSkillPress, onAddPress } = this.props
    return (
      <Container>
        {items && items.map(item =>
          <CompactListItem
            key={`${item.title}-${item.cmd}`}
            title={`${capitalizeFirstLetter(item.title)}`}
            subtitle={`${item.cmd}`}
            onPress={() => {
              onSkillPress(item.title, item.cmd)
            }} />
        )}
        <Footer style={{ paddingTop: 34 }}>
          <Card
            button={`Add command`}
            onPress={onAddPress}
          />
        </Footer>
      </Container>
    )
  }
}
