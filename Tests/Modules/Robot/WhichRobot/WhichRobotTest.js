import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Robot/WhichRobot/Screen'
import { Images } from 'App/Themes'

const robots = [{
  id: 'test',
  name: 'Test Robot',
  image: Images.robots.custom_robot,
  links: [],
  connection: { type: 'bluetooth' },
  params: [],
  commands: {
    stop: 'M 0',
    forwards: 'M 1',
    back: 'M 2',
    left: 'M 3',
    right: 'M 4'
  },
  moves: [
    { title: 'Wait', cmd: 'M 0', showDuration: true },
    { title: 'Forwards', cmd: 'M 1', showDuration: true },
    { title: 'Back', cmd: 'M 2', showDuration: true },
    { title: 'Left', cmd: 'M 3', showDuration: true },
    { title: 'Right', cmd: 'M 4', showDuration: true }
  ],
  skills: []
}]

describe('WhichRobot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        robots={robots}
        onPress={(robot) => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
