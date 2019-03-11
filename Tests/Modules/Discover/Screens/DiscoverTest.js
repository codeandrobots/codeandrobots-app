import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Discover from 'App/Modules/Discover/Screens/Components'

describe('Discover', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Discover
        showNotReadyModal={false}
        onHideNotReadyModal={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
