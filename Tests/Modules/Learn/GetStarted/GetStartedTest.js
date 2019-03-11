import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Learn/GetStarted/Screen'

describe('GetStarted', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        onDone={() => {}}
        onLearnMorePress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
