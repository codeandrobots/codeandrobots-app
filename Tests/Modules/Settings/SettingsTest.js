import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Settings/Screen'

describe('Settings', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        onChooseRobotPress={() => {}}
        onShareAppPress={() => {}}
        onFeedbackPress={() => {}}
        onFAQPress={() => {}}
        onSupportPress={() => {}}
        onAboutPress={() => {}}
        onPrivacyPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
