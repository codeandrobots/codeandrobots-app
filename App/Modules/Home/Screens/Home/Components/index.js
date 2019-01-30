import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import TouchableOpacity from 'App/Components/TouchableOpacity'

import { ApplicationStyles, Images } from 'App/Themes'

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
})

export default class Screen extends Component {
  static propTypes = {
    onLearnMorePress: PropTypes.func.isRequired
  }

  render () {
    const { onLearnMorePress } = this.props
    return (
      <View style={styles.mainContainer}>
        <View style={styles.helloImage}>
          <Image source={Images.Hello} />
        </View>
        <View style={styles.footer}>
          <View style={[styles.footerSection, styles.footerTitle]}>
            <Text style={styles.text}>HELLO</Text>
          </View>
          <View style={[styles.footerSection, styles.footerSubtitle]}>
            <Text style={styles.footerSubtitleText}>{'The app is ready! Sorry, almost ready :)\n\nThe good news is you can follow along as this Beta version of the app develops over the coming weeks.'}</Text>
          </View>
          <View style={styles.footerSection}>
            <TouchableOpacity style={styles.button} onPress={onLearnMorePress}>
              <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
