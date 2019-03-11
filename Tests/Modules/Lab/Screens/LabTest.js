import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Lab from 'App/Modules/Lab/Screens/Components'

describe('Lab', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Lab
        showNotReadyModal={false}
        onHideNotReadyModal={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
