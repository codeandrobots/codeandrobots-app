import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ApplicationStyles, Colors } from 'App/Themes'

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
})

export default class Screen extends Component {
  render () {
    return (
      <View style={styles.footer}>
        <View style={styles.footerTop} />
        <View style={styles.footerButtons}>
          <View style={[styles.footerButton, styles.footerButtonSmall]}>
            <View style={[styles.footerButtonOutter, styles.footerButtonOutterSmall]}>
              <View style={[styles.footerButtonInner, styles.footerButtonInnerSmall]}>
                <FontAwesomeIcon name='heart' color={Colors.footer.button.nav.background} size={24} style={[styles.footerButtonIcon, styles.footerButtonIconSmall]} />
              </View>
            </View>
          </View>
          <View style={styles.footerButton}>
            <View style={styles.footerButtonOutter}>
              <View style={styles.footerButtonInner}>
                <MaterialIcon name='home' color={Colors.footer.button.nav.background} size={38} style={styles.footerButtonIcon} />
              </View>
            </View>
          </View>
          <View style={[styles.footerButton, styles.footerButtonSmall]}>
            <View style={[styles.footerButtonOutter, styles.footerButtonOutterSmall]}>
              <View style={[styles.footerButtonInner, styles.footerButtonInnerSmall]}>
                <MaterialIcon name='dots-horizontal' color={Colors.footer.button.nav.background} size={32} style={[styles.footerButtonIcon, {marginTop: 10}]} />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
