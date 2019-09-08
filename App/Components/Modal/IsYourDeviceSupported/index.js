import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class IsYourDeviceSupported extends Component {
  static propTypes = {
    onHidePress: PropTypes.func
  }

  render () {
    const text = [
      'The app currently supports the Otto DIY and Nybble robots',
      'or the Code & Robots simulator.\n\nThe aim of the Code &',
      'Robots app is to support all of the most popular robots',
      'and more will be added soon 🤞'
    ].join(' ')
    return (
      <Card
        image={Images.bluetooth}
        text={text} />
    )
  }
}
