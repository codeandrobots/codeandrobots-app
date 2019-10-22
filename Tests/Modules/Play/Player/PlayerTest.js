import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Player/Screen'

import config from 'App/Services/Client/Otto/Config'

describe('Player', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        config={config}
        message='Use joystick to drive'
        showNotConnectedModal={false}
        onConnect={() => {}}
        onDraggableMove={(touch) => {}}
        onDraggableRelease={(touch) => {}}
        onDraggableStart={() => {}}
        onSliderPress={() => {}}
        onSkillPress={() => {}}
        onHideNotConnectedModal={(touch) => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
