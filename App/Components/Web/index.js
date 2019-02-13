import React, { Component } from 'react'
import { View, WebView } from 'react-native'
import PropTypes from 'prop-types'

import { LoadingIndicator } from 'App/Components'

import s from './Styles'

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
      <View style={s.view}>
        <WebView
          onLoad={this.loadingDone}
          style={s.webView}
          source={{uri: this.props.source}} />
        {this.state.loading && (
          <LoadingIndicator containerStyle={s.loadingView} size='large' />
        )}
      </View>
    )
  }
}
