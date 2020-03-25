import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import uuid from 'react-native-uuid'

import s from './Styles'

export default class PlayerSideParams extends Component {
  static propTypes = {
    side: PropTypes.string,
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultIndex: PropTypes.number,
    onPress: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    const { labels, defaultIndex } = this.props
    const active =
      (defaultIndex >= 0 && defaultIndex < labels.length) ? defaultIndex : 0
    this.state = {
      active
    }
  }

  setActive = (index) => {
    this.setState({ active: index }, () => {
      this.props.onPress(index)
    })
  }

  render () {
    const {
      style = undefined,
      side = 'left',
      title,
      labels } = this.props

    const { active } = this.state

    const sideNavView = side === 'right' ? s.rightNavView : s.leftNavView

    return (
      <View style={[s.navView, sideNavView, style]}>
        {title &&
          <View style={s.navHeader}>
            <Text style={s.navTitle}>{title}</Text>
          </View>
        }
        <View style={s.navSeparator} />
        <View style={[s.navParams, s.navParams_left]}>
          {labels.map((label, index) => {
            const labelStyles = [s.navParam]
            if (active === index) {
              labelStyles.push(s.navParam_active)
            }
            return (
              <TouchableOpacity
                key={uuid.v4()}
                onPress={() => { this.setActive(index) }}>
                <Text style={labelStyles}>{label}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }
}
