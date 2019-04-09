import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Learn/Lessons/Screen'

describe('Lessons', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        showNotReadyModal={false}
        onHideNotReadyModal={() => {}}
        onPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
