import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import config from 'App/Modules/Robot/SetupRobot/Setup/config'
import Screen from 'App/Modules/Robot/SetupRobot/Setup/Screen'

describe('SetupRobot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        setup={{...config}}
        onConnectionPress={() => {}}
        onMovesPress={() => {}}
        onSkillsPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
