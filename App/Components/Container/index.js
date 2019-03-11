import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { StyleSheet as s } from 'App/Themes'

export default class Container extends Component {
  static propTypes = {
    scrollable: PropTypes.bool
  }

  render () {
    const {style = undefined, scrollable = false} = this.props
    const ContainerView = (scrollable) ? ScrollView : View
    return (
      <ContainerView style={[s.container, style]}>
        {this.props.children}
      </ContainerView>
    )
  }
}
