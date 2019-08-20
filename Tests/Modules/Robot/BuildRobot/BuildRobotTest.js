import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import BuildRobotScreen from 'App/Modules/Robot/BuildRobot/Screen'

describe('BuildRobot', () => {
  let wrapper

  const list = {
    stepOne: {
      image: null,
      title: '',
      text: ''
    },
    stepTwo: {
      image: null,
      title: '',
      text: ''
    },
    stepThree: {
      image: null,
      title: '',
      text: ''
    },
    stepFour: {
      image: null,
      title: '',
      text: ''
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <BuildRobotScreen
        list={list}
        navigation={{ navigate: () => { } }}
        showNotReadyModal={false}
        onHideNotReadyModal={() => { }}
        onPress={() => { }} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
