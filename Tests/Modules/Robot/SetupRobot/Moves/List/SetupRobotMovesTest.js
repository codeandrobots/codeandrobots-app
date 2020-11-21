import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import config from 'App/Modules/Robot/SetupRobot/Setup/config'
import Screen from 'App/Modules/Robot/SetupRobot/Moves/List/Screen'

describe('SetupRobotMoves', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        commands={config.commands}
        onCommandPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
