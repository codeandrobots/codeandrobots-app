import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Rate/Screen'

describe('Rate', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen onRatePress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
