import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Connect/Screen'

const devices = [
  {id: '1', name: 'HC-06'},
  {id: '2', name: 'Laptop'}
]

const navigation = {navigate: () => {}}

const onProps = {
  onEnableBluetooth: () => {},
  onScan: () => {},
  onConnect: () => {},
  onDisconnect: () => {},
  onDone: () => {},
  onProblemsConnecting: () => {},
  onHideProblemsConnectingModal: () => {}
}

describe('Connect', () => {
  it('Component renders correctly when bluetooth is not enabled', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        enabled={false}
        scanning={false}
        devices={[]}
        showProblemsConnectingModal={false}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when bluetooth is enabled', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        enabled
        scanning={false}
        devices={devices}
        showProblemsConnectingModal={false}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when scanning', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        enabled
        scanning
        devices={devices}
        showProblemsConnectingModal={false}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
