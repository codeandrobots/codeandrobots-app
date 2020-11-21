import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Robot/SetupRobot/Moves/Move/Screen'

describe('SetupRobotMove', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        command='stop'
        value='M 0'
        onChange={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
