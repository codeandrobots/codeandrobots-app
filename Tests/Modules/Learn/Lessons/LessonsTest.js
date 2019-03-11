import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Lessons from 'App/Modules/Learn/Lessons/Components'

describe('Lessons', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Lessons
        showNotReadyModal={false}
        onHideNotReadyModal={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
