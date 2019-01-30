import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Home/Screens/Home/Components'

describe('Screen', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen onLearnMorePress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
