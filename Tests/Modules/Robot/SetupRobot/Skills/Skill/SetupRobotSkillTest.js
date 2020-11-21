import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Robot/SetupRobot/Skills/Skill/Screen'

const skill = {
  category: 'Skills',
  items: [
    { title: 'Dance', cmd: 'D 1' }
  ]
}

describe('SetupRobotSkill', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        skill={skill}
        onSkillPress={() => {}}
        onAddPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
