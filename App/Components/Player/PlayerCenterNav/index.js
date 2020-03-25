import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import { Images } from 'App/Themes'
import {
  Tabs,
  PlayerButton
} from 'App/Components'
import { splitItemsByRow } from 'App/Services/UIUtils'

import s from './Styles'

export default class PlayerCenterNav extends Component {
  static propTypes = {
    theme: PropTypes.string,
    config: PropTypes.any,
    onSkillPress: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeSkillCategoryIndex: 0
    }
  }

  onCategoryPress = (category, i) => {
    this.setState({ activeSkillCategoryIndex: i })
  }

  render () {
    const {
      theme,
      config,
      onSkillPress
    } = this.props
    const { activeSkillCategoryIndex } = this.state

    const {
      skills = [],
      showSkillIcons
    } = config || {}

    const skillCategories = skills.map(skill => (skill.category) ? skill.category : '?')

    const activeSkills = (skills.length > 0)
      ? skills[activeSkillCategoryIndex].items
      : []
    const skillsInRows = (skills.length > 0)
      ? splitItemsByRow(activeSkills, showSkillIcons)
      : []

    const buttonsStyle = (showSkillIcons)
      ? [s.buttons, s.buttons_small]
      : [s.buttons]

    return (
      <View style={{ flex: 1 }}>
        {skillCategories.length > 1 &&
          <Tabs
            theme={theme}
            tabs={skillCategories.map(category => category.toUpperCase())}
            onTabPress={this.onCategoryPress} />
        }
        <View style={s.skills}>
          {skillsInRows.map((skillsInRow) => {
            return (
              <View key={uuid.v4()} style={buttonsStyle}>
                {skillsInRow.map((skill) => {
                  return (skill)
                    ? (
                      <PlayerButton
                        key={uuid.v4()}
                        style={s.playerButton}
                        theme={theme}
                        text={skill.title}
                        image={(showSkillIcons) ? skill.image : null}
                        onPress={() => {
                          onSkillPress(skillCategories[activeSkillCategoryIndex], activeSkills.findIndex(s => s.title === skill.title))
                        }} />
                    )
                    : (
                      <PlayerButton
                        key={uuid.v4()}
                        style={s.playerButton}
                        theme={theme}
                        image={(showSkillIcons) ? Images.transparent : null}
                        disabled
                        onPress={() => {}} />
                    )
                })}
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
