import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { Button } from 'App/Components'

import s from './Styles'

export default class Carousel extends Component {
  static propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string),
    onPress: PropTypes.func,
    onPageChange: PropTypes.func,
    onDone: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      page: 0
    }
  }

  getPage = () => {
    return this.state.page
  }

  prevPage = () => {
    const { page } = this.state
    const { onPageChange = () => {} } = this.props
    if (page > 0) {
      this.setState({ page: page - 1 }, () => { onPageChange() })
    }
  }

  nextPage = () => {
    const { page } = this.state
    const { children, onPageChange = () => {}, onDone = () => {} } = this.props
    if (page < children.length - 1) {
      this.setState({ page: page + 1 }, () => { onPageChange() })
    } else {
      onDone()
    }
  }

  renderControls = () => {
    const { page } = this.state
    const { children, buttons = [], onPress = this.nextPage } = this.props

    let bubbles = []
    for (var i = 0; i < children.length; i++) {
      const style = (page === i) ? [s.bubble, s.bubble_active] : s.bubble
      bubbles.push(<View style={style} key={i} />)
    }

    const button = (buttons && page < buttons.length - 1)
      ? buttons[page]
      : (page === children.length - 1) ? 'Done' : 'Next'

    return (
      <View style={s.controls}>
        {bubbles}
        <View style={{flex: 1}} />
        <Button text={button} onPress={onPress} />
      </View>
    )
  }

  render () {
    const { page } = this.state
    const { children } = this.props

    if (children.length < 1) {
      return null
    }

    return (
      <View>
        <View style={s.page}>
          { children[page] }
        </View>
        <View style={s.footer}>
          { this.renderControls() }
        </View>
      </View>
    )
  }
}
