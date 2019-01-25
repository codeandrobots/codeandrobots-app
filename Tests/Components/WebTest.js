import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Web from 'App/Components/Web'

describe('Screen', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Web source='http://www.google.com' />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
