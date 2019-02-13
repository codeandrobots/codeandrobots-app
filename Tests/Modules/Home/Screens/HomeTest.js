import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Home from 'App/Modules/Home/Screens/Components'

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Home onLearnMorePress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
