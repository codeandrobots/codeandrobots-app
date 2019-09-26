import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Images } from 'App/Themes'

import Screen from 'App/Modules/Robot/ConnectRobot/Screen'

describe('ConnectRobot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        image={Images.hello}
        text='Let`s get connected'
        title='Hello'
        links={['Build Instructions', 'Website']}
        onLinkPress={() => {}}
        onConnectPress={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
