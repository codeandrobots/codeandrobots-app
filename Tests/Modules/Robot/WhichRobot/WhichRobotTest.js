import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Robot/WhichRobot/Screen'

describe('WhichRobot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        onPress={(robot) => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
