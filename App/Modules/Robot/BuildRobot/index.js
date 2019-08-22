import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Images } from 'App/Themes'
import BuildRobotScreen from './Screen'

export class BuildRobotContainer extends Component {
  render () {
    const list = {
      stepOne: {
        image: Images.buildRobots.otto.step1,
        title: 'What\'s in the kit?',
        text: 'List of the materials you will need to build Otto'
      },
      stepTwo: {
        image: Images.buildRobots.otto.step2,
        title: 'Foot assembly',
        text: 'Put the micro servos inside Otto\'s feet'
      },
      stepThree: {
        image: Images.buildRobots.otto.step3,
        title: 'Body',
        text: 'Fix servos to the main body'
      },
      stepFour: {
        image: Images.buildRobots.otto.step4,
        title: 'Fix legs to the body',
        text: 'Connect the legs to the hub of the micro servo'
      }
    }

    return (
      <BuildRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        list={list}
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildRobotContainer)
