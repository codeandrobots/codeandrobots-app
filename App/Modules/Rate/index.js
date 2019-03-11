import React, { Component } from 'react'
import { Platform, Linking } from 'react-native'
import { connect } from 'react-redux'

import Config from 'react-native-config'

import { isSimulator, bundleId } from 'App/Services/Properties'
import { notPossibleInSimulator } from 'App/Services/Alerts'

import Screen from './Screen'

export class RateContainer extends Component {
  onRatePress = () => {
    if (isSimulator()) { return notPossibleInSimulator() }
    if (Platform.OS === 'ios') {
      Linking.openURL(`itms://itunes.apple.com/us/app/apple-store/${Config.IOS_APP_ID}?mt=8`)
    } else {
      Linking.openURL(`market://details?id=${bundleId()}`)
    }
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onRatePress={this.onRatePress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RateContainer)
