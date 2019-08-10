import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import { LabelRangeSliderInput, PlayerButton } from 'App/Components'

import { splitItemsByRow } from 'App/Services/UIUtils'

import s from './Styles'

export default class PlayerBottomNav extends Component {
  static propTypes = {
    theme: PropTypes.string,
    slider: PropTypes.shape({
      title: PropTypes.string,
      labels: PropTypes.arrayOf(PropTypes.string).isRequired,
      defaultIndex: PropTypes.number
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
      }).isRequired
    ),
    showSkillIcons: PropTypes.bool,
    onSliderPress: PropTypes.func,
    onSkillPress: PropTypes.func
  }

  render () {
    const {
      style = undefined,
      theme = 'default',
      slider,
      skills = [],
      showSkillIcons = false,
      onSliderPress = () => {},
      onSkillPress = () => {} } = this.props

    const skillsInRows = splitItemsByRow(skills, showSkillIcons)

    const buttonsStyle = (showSkillIcons)
      ? [s.buttons, s.buttons_small]
      : [s.buttons]

    return (
      <View style={[s.footer, style]}>
        {slider &&
          <LabelRangeSliderInput
            theme={theme}
            {...slider}
            onPress={onSliderPress} />
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
                        theme={theme}
                        text={skill.title}
                        image={(showSkillIcons) ? skill.image : null}
                        onPress={() => {
                          onSkillPress(skills.findIndex(s => s.title === skill.title))
                        }} />
                    )
                    : (
                      <PlayerButton
                        key={uuid.v4()}
                        theme={theme}
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
