
import React, { Component } from 'react'

import Web from 'App/Components/Web'
import NavButton from 'App/Components/NavButton'

export default class WebContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state
    const title = params.title
    return (params.headerRight)
      ? {title, headerRight: params.headerRight}
      : {title}
  }

  constructor (props) {
    super(props)

    this.state = {
      source: undefined
    }
  }

  componentDidMount () {
    this.setNavHeader()
    const params = this.params()
    if (params) {
      this.setState({
        source: params.source
      })
    }
  }

  params = () => {
    return this.props.navigation.state.params
  }

  onPress = () => {
    this.props.navigation.goBack()
    const params = this.params()
    if (params) {
      params.onPress()
    }
  }

  setNavHeader = () => {
    const params = this.params()
    if (params && params.onPress) {
      const onPressText = (params.onPressText) ? params.onPressText : 'Done'
      const headerRight = <NavButton onPress={this.onPress} text={onPressText} />
      this.props.navigation.setParams({headerRight})
    }
  }

  render () {
    if (!this.state.source) {
      return null
    }
    return <Web source={this.state.source} />
  }
}
