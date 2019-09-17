import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import WhichRobotScreen from 'App/Modules/Robot/WhichRobot/Screen'

describe('WhichRobot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <WhichRobotScreen
        navigation={{navigate: () => {}}}
        showNotReadyModal={false}
        onHideNotReadyModal={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
