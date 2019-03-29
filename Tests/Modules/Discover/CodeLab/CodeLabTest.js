import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Discover/CodeLab/Screen'

describe('CodeLab', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        instructions={[]}
        onChangeOrder={() => {}}
        onClose={() => {}}
        onNavPress={() => {}}
        onRun={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
