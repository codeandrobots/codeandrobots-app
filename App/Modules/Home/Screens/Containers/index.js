import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from '../Components'

export class HomeContainer extends Component {
  onNavigatePress = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onNavigatePress={this.onNavigatePress}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
