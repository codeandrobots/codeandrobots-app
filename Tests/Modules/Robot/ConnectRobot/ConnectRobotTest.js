import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Images } from 'App/Themes'

import Screen from 'App/Modules/Robot/ConnectRobot/Screen'

describe('ConnectRobot', () => {
  let wrapper

  const links = [
    {
      title: 'Build Instructions',
      url: 'http://hellobot.com/build'
    },
    {
      title: 'Website',
      url: 'http://hellobot.com'
    }
  ]

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        image={Images.hello}
        title='Hello'
        text='The robot that says hi'
        links={links}
        onLinkPress={() => {}}
        onConnectPress={() => {}}
        onNamePress={() => {}}
        onChangePicturePress={() => {}}
        onSetupPress={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
