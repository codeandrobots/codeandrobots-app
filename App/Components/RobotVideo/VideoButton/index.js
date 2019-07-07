import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity } from 'App/Components'

import s from './Styles'

/*
    TODO
  - No outer/inner button, just one button with an orange 'play' arrow
  - Opacity should be 0.8
  - Shrink size based on Figma - maybe about 1/5 the height of the video window?
*/

export default class IconButton extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { size = 'small', disabled = false, onPress, style = {} } = this.props
    const isSmall = (size === 'small')
    const styles = {
      button: [
        s.button,
        ...((isSmall) ? [s.button_small] : []),
        ...((style.button) ? [style.button] : [])
      ],
      buttonOutter: [
        ...((!disabled) ? [s.buttonOutter] : [s.buttonOutter, s.buttonOutter_disabled]),
        ...((isSmall) ? [s.buttonOutter_small] : []),
        ...((style.buttonOutter) ? [style.buttonOutter] : [])
      ],
      buttonInner: [
        s.buttonInner,
        ...((isSmall) ? [s.buttonInner_small] : []),
        ...((style.buttonInner) ? [style.buttonInner] : [])
      ],
      buttonIcon: [
        s.buttonIcon,
        ...((style.buttonIcon) ? [style.buttonIcon] : [])
      ]
    }
    return (
      <TouchableOpacity style={styles.button} disabled={disabled} onPress={onPress}>
        <View style={styles.buttonOutter}>
          <View style={styles.buttonInner}>
            <View style={styles.buttonIcon}>
              {this.props.children}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
