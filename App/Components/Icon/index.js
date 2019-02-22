import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { Colors } from 'App/Themes'

export default class Icon extends Component {
  static propTypes = {
    set: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    disabled: PropTypes.bool
  }

  render () {
    const {
      style = undefined,
      set = 'FontAwesome',
      name,
      size = 18,
      color: colorProp,
      disabled = false } = this.props

    const color = (colorProp != null)
      ? colorProp
      : (!disabled) ? Colors.icon : Colors.icon_disabled

    const iconProps = { name, color, size, style }
    switch (set) {
      case 'Material':
        return (<MaterialIcon {...iconProps} />)
      case 'Ion':
        return (<IonIcon {...iconProps} />)
      case 'SimpleLine':
        return (<SimpleLineIcon {...iconProps} />)
      default:
        return (<FontAwesomeIcon {...iconProps} />)
    }
  }
}
