import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'

import { TouchableOpacity, Icon } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

const Types = {
  action: 'action',
  sensor: 'sensor',
  control: 'control',
  data: 'data'
}

export default class CodeLabNav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: Types.action
    }
  }

  setActive = (active) => {
    this.setState({ active })
  }

  render () {
    const { style = undefined } = this.props
    const { active } = this.state

    return (
      <View style={[s.view, style]} onPress={() => {}}>
        <View style={s.typesView}>
          <TouchableOpacity
            style={[s.typeView, (active === Types.action) ? s.typeView_action : null]}
            onPress={() => { this.setActive(Types.action) }}>
            <Text style={s.text}>ACTION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.typeView, (active === Types.sensor) ? s.typeView_sensor : null]}
            onPress={() => { this.setActive(Types.sensor) }}>
            <Text style={s.text}>SENSOR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.typeView, (active === Types.control) ? s.typeView_control : null]}
            onPress={() => { this.setActive(Types.control) }}>
            <Text style={s.text}>CONTROL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.typeView, (active === Types.data) ? s.typeView_data : null]}
            onPress={() => { this.setActive(Types.data) }}>
            <Text style={s.text}>DATA</Text>
          </TouchableOpacity>
        </View>
        {active === Types.action && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={s.instructionsScrollView}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='arrow-up' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Move Forward</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='arrow-left' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Turn Left</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='arrow-right' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Turn Right</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='arrow-down' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Move Back</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {active === Types.sensor && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={s.instructionsScrollView_sensor}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='thermometer' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Read Temperature</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='road' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Read Distance</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {active === Types.control && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={s.instructionsScrollView_control}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Text style={s.instruction}>If</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Text style={s.instruction}>Loop</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Text style={s.instruction}>While</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {active === Types.data && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={s.instructionsScrollView_data}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='eyedropper' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Set Color</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => {}}>
                <Icon name='rocket' size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>Set Speed</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    )
  }
}
