import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Connect/Screen'

const devices = [
  {id: '1', name: 'HC-06'},
  {id: '2', name: 'Laptop'}
]

const onProps = {
  onEnableBluetooth: () => {},
  onScan: () => {},
  onConnect: () => {},
  onDisconnect: () => {},
  onDone: () => {},
  onProblemsConnecting: () => {}
}

describe('Connect', () => {
  it('Component renders correctly when bluetooth is not enabled', () => {
    const wrapper = shallow(
      <Screen
        enabled={false}
        scanning={false}
        devices={[]}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when bluetooth is enabled', () => {
    const wrapper = shallow(
      <Screen
        enabled
        scanning={false}
        devices={devices}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when scanning', () => {
    const wrapper = shallow(
      <Screen
        enabled
        scanning
        devices={devices}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
