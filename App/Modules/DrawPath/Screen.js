import React, { Component } from 'react'
import { Draw } from 'App/Components'

export default class DrawPathScreen extends Component {
  render () {
    return (
      <Draw strokeColor={'red'} strokeWidth={7} />
    )
  }
}
