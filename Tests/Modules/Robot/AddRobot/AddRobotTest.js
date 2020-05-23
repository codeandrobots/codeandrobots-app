import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Images } from 'App/Themes'

import Screen from 'App/Modules/Robot/AddRobot/Screen'

describe('AddRobot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        image={Images.robots.custom_robot}
        title={'Custom robot'}
        text={'Let’s see if your robot has what it takes.'}
        onAddPress={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
