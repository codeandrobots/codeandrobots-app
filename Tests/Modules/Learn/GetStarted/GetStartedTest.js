import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import GetStarted from 'App/Modules/Learn/GetStarted/Components'

describe('GetStarted', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <GetStarted />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
