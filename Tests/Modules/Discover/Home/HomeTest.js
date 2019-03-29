import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Discover/Home/Screen'

describe('Discover', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        showNotReadyModal={false}
        onHideNotReadyModal={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
