import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View, WebView, ActivityIndicator } from 'react-native'

export default class Web extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  loadingDone = () => {
    this.setState({ loading: false })
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          onLoad={this.loadingDone}
          style={{ flex: 1 }}
          source={{uri: this.props.source}} />
        {this.state.loading && (
          <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size='large' />
          </View>
        )}
      </View>
    )
  }
}
