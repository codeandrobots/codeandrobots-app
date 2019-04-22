import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Discover/CodeLab/Screen'

describe('CodeLab', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        instructions={[]}
        showNotConnectedModal={false}
        onChangeOrder={() => {}}
        onClose={() => {}}
        onNavPress={() => {}}
        onRun={() => {}}
        onHideNotConnectedModal={(touch) => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
