import React, { Component } from 'react'
import Screen from './Screen'
import { connect } from 'react-redux'

export class DrawPathModule extends Component {
  render () {
    return (
      <Screen ref={(ref) => {
        this.screen = ref
      }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawPathModule)
