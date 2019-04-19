import React, { Component } from 'react'
import { View, Modal as RNModal } from 'react-native'

import PropTypes from 'prop-types'

import { TouchableOpacity, TouchableWithoutFeedback, Icon } from 'App/Components'

import NotReady from './NotReady'
import NotConnected from './NotConnected'
import ProblemsConnecting from './ProblemsConnecting'
import IsYourDeviceSupported from './IsYourDeviceSupported'

import s from './Styles'

export default class Modal extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    show: PropTypes.bool.isRequired,
    onHidePress: PropTypes.func,
    template: PropTypes.string
  }

  constructor (props) {
    super(props)
    const { show } = props
    this.state = { show }
  }

  onHidePress = () => {
    if (this.props.onHidePress) {
      this.props.onHidePress()
    } else {
      this.setState({ show: false })
    }
  }

  render () {
    const { style = undefined, template } = this.props
    const { show } = (this.props.onHidePress)
      ? this.props
      : this.state
    return (
      <RNModal
        transparent
        visible={show}
        onRequestClose={() => {}} >
        <TouchableWithoutFeedback onPress={this.onHidePress}>
          <View style={[s.modal, style]}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={s.modalBox}>
                <TouchableOpacity style={s.close} onPress={this.onHidePress}>
                  <Icon name='close' />
                </TouchableOpacity>
                {!template && this.props.children}
                {template && template === 'NotReady' && (
                  <NotReady
                    navigation={this.props.navigation}
                    onHidePress={this.onHidePress} />
                )}
                {template && template === 'NotConnected' && (
                  <NotConnected
                    navigation={this.props.navigation}
                    onHidePress={this.onHidePress} />
                )}
                {template && template === 'ProblemsConnecting' && (
                  <ProblemsConnecting
                    navigation={this.props.navigation}
                    onHidePress={this.onHidePress} />
                )}
                {template && template === 'IsYourDeviceSupported' && (
                  <IsYourDeviceSupported
                    navigation={this.props.navigation}
                    onHidePress={this.onHidePress} />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </RNModal>
    )
  }
}
