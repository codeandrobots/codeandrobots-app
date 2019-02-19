import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Settings from 'App/Modules/Settings/Screens/Components'

describe('Settings', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Settings
        onShareAppPress={() => {}}
        onFeedbackPress={() => {}}
        onFAQPress={() => {}}
        onSupportPress={() => {}}
        onAboutPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
