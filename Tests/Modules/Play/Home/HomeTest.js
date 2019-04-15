import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Home/Screen'

describe('Play', () => {
  let wrapper

  beforeEach(() => {
    const onPress = {
      getStarted: () => {},
      explore: () => {},
      playGame: () => {},
      drive: () => {},
      beep: () => {},
      dance: () => {},
      findAFriend: () => {}
    }
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        showNotReadyModal={false}
        onHideNotReadyModal={() => {}}
        onPress={onPress} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
