import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from '../Components'

export class BottomNavContainer extends Component {
  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavContainer)
