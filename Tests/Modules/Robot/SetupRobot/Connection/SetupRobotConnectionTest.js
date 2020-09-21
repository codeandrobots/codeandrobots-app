import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import config from 'App/Modules/Robot/SetupRobot/Setup/config'
import Screen from 'App/Modules/Robot/SetupRobot/Connection/Screen'

describe('SetupRobotConnection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        connection={config.connection}
        onChange={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
