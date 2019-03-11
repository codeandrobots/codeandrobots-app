import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Home/Screen'

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen onNavigatePress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
