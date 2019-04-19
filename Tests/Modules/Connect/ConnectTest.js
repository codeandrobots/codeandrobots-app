import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Connect/Screen'

const devices = [
  {id: '1', name: 'HC-06'},
  {id: '2', name: 'Laptop'}
]

const activeDevice = {...devices[0], isConnected: true}

const navigation = {navigate: () => {}}

const instructions = 'Test instructions'

const onProps = {
  onEnableBluetooth: () => {},
  onScan: () => {},
  onConnect: () => {},
  onDisconnect: () => {},
  onDone: () => {},
  onEmailInstructions: () => {},
  onIsYourDeviceSupported: () => {},
  onProblemsConnecting: () => {},
  onHideProblemsConnectingModal: () => {}
}

describe('Connect', () => {
  it('Component renders correctly when first connecting', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        enabled={false}
        scanning={false}
        devices={[]}
        showProblemsConnectingModal={false}
        showIsYourDeviceSupportedModal={false}
        instructions={instructions}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when connected to simulator', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        connectTo='simulator'
        enabled={false}
        scanning={false}
        devices={[]}
        showProblemsConnectingModal={false}
        showIsYourDeviceSupportedModal={false}
        instructions={instructions}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when bluetooth is not enabled', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        connectTo='device'
        enabled={false}
        scanning={false}
        devices={[]}
        showProblemsConnectingModal={false}
        showIsYourDeviceSupportedModal={false}
        instructions={instructions}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when bluetooth is enabled', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        connectTo='device'
        enabled
        scanning={false}
        devices={devices}
        showProblemsConnectingModal={false}
        showIsYourDeviceSupportedModal={false}
        instructions={instructions}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when scanning', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        connectTo='device'
        enabled
        scanning
        devices={devices}
        showProblemsConnectingModal={false}
        showIsYourDeviceSupportedModal={false}
        instructions={instructions}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Component renders correctly when bluetooth device is connected', () => {
    const wrapper = shallow(
      <Screen
        navigation={navigation}
        connectTo='device'
        enabled
        scanning={false}
        devices={devices}
        activeDevice={activeDevice}
        showProblemsConnectingModal={false}
        showIsYourDeviceSupportedModal={false}
        instructions={instructions}
        {...onProps} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
