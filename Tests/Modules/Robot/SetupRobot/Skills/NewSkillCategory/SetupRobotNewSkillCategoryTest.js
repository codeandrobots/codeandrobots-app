import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Robot/SetupRobot/Skills/NewSkillCategory/Screen'

describe('SetupRobotNewSkillCategory', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        category='Sounds'
        onChange={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
