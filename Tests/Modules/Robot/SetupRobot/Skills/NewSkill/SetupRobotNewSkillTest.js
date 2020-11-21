import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Robot/SetupRobot/Skills/NewSkill/Screen'

describe('SetupRobotNewSkill', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        command='Dance'
        value='D 1'
        onChange={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
