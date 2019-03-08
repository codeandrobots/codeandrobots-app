import React, { Component } from 'react'
import { View, Modal as RNModal } from 'react-native'

import PropTypes from 'prop-types'

import { TouchableOpacity, TouchableWithoutFeedback, Icon } from 'App/Components'
import NotReady from './NotReady'

import s from './Styles'

export default class Modal extends Component {
  static propTypes = {
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
    this.setState({ show: false })
    if (this.props.onHidePress) {
      this.props.onHidePress()
    }
  }

  render () {
    const { style = undefined, template } = this.props
    const { show } = this.state
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
                  <NotReady />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </RNModal>
    )
  }
}
