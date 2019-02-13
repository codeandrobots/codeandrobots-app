import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import s from './Styles'

export default class IconButton extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large'])
  }

  render () {
    const {size = 'small', styles: propStyles = {}} = this.props
    const isSmall = (size === 'small')
    const styles = {
      button: [
        s.button,
        ...((isSmall) ? [s.button_small] : []),
        ...((propStyles.button) ? [propStyles.button] : [])
      ],
      buttonOutter: [
        s.buttonOutter,
        ...((isSmall) ? [s.buttonOutter_small] : []),
        ...((propStyles.buttonOutter) ? [propStyles.buttonOutter] : [])
      ],
      buttonInner: [
        s.buttonInner,
        ...((isSmall) ? [s.buttonInner_small] : []),
        ...((propStyles.buttonInner) ? [propStyles.buttonInner] : [])
      ],
      buttonIcon: [
        s.buttonIcon,
        ...((propStyles.buttonIcon) ? [propStyles.buttonIcon] : [])
      ]
    }
    return (
      <View style={styles.button}>
        <View style={styles.buttonOutter}>
          <View style={styles.buttonInner}>
            <View style={styles.buttonIcon}>
              {this.props.children}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
