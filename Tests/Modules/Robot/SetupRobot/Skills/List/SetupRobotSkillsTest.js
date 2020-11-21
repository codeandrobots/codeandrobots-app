import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import config from 'App/Modules/Robot/SetupRobot/Setup/config'
import Screen from 'App/Modules/Robot/SetupRobot/Skills/List/Screen'

describe('SetupRobotSkills', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        skills={config.skills}
        onSkillPress={() => {}}
        onAddPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
