import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Robot/EditRobot/Name/Screen'

describe('EditRobotName', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        name={'Robot 1'}
        onChangeText={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
