import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native'

import { ApplicationStyles } from 'App/Themes'

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
})

export default class NavButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string
  }

  render () {
    if (Platform.OS === 'ios') {
      return (
        <Button onPress={this.props.onPress} title={this.props.text} />
      )
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.navButton} onPress={this.props.onPress}>
            <Text style={styles.navButtonText}>{this.props.text}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
