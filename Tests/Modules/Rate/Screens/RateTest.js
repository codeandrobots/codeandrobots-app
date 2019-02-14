import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Rate from 'App/Modules/Rate/Screens/Components'

describe('Rate', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Rate onRatePress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
