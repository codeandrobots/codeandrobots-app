import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import _ from 'lodash'
import uuid from 'react-native-uuid'

import { LabelRangeSliderInput, PlayerButton } from 'App/Components'

import s from './Styles'

export default class PlayerBottomNav extends Component {
  static propTypes = {
    theme: PropTypes.string,
    slider: PropTypes.shape({
      title: PropTypes.string,
      labels: PropTypes.arrayOf(PropTypes.string).isRequired,
      defaultIndex: PropTypes.number,
      onPress: PropTypes.func.isRequired
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        onPress: PropTypes.func.isRequired
      }).isRequired
    )
  }

  render () {
    const { style = undefined, theme = 'default', slider, skills = [] } = this.props

    // Show three skills per row
    const maxSkillsByRow = 3
    const skillsInThrees = _.chunk(skills, maxSkillsByRow)

    // Add empty skills to last chunk if last chunk has less than three skills
    const chunks = skillsInThrees.length
    const skillCountInLastChunk = (chunks > 0) ? skillsInThrees[chunks - 1].length : 0
    if (skillCountInLastChunk > 0) {
      for (let i = skillCountInLastChunk; i < maxSkillsByRow; i++) {
        skillsInThrees[chunks - 1].push(null)
      }
    }

    return (
      <View style={[s.footer, style]}>
        {slider &&
          <LabelRangeSliderInput theme={theme} {...slider} />
        }
        <View style={s.skills}>
          {skillsInThrees.map((skills) => {
            return (
              <View key={uuid.v4()} style={s.buttons}>
                {skills.map((skill) => {
                  return (skill)
                    ? <PlayerButton key={uuid.v4()} theme={theme} text={skill.title} onPress={skill.onPress} />
                    : <PlayerButton key={uuid.v4()} theme={theme} disabled onPress={() => {}} />
                })}
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
