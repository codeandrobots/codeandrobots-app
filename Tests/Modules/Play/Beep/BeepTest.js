import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Beep/Screen'

const sounds = [
  {key: '1', name: 'Beep'},
  {key: '2', name: 'Bop'}
]

describe('Beep', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        sounds={sounds}
        showNotConnectedModal={false}
        onPlay={(touch) => {}}
        onHideNotConnectedModal={(touch) => {}}
        onBack={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
