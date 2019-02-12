import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Nav/Screens/BottomNav/Components'

describe('Screen', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
