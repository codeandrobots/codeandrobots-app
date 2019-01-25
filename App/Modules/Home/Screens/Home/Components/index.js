import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import { ApplicationStyles, Metrics } from 'App/Themes'

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
})

export default class Screen extends Component {
  render () {
    return (
      <View style={[styles.mainContainer, {paddingTop: Metrics.baseMarginX3}]}>
        <LinearGradient style={styles.fullScreenGradient} useAngle angle={143} colors={['#F9BC62', '#FFDCA8']} />
      </View>
    )
  }
}
