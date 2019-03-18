import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Drive/Screen'

describe('Drive', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        message='Use joystick to drive'
        onDraggableMove={(touch) => {}}
        onDraggableRelease={(touch) => {}}
        onDraggableStart={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
