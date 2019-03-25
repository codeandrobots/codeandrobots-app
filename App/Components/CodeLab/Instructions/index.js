// Based on https://github.com/gitim/react-native-sortable-list/blob/master/examples/Basic/App.js

import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import SortableList from 'react-native-sortable-list'

import Types from 'App/Services/PropTypes'

import Row from './Row'

import s from './Styles'

export default class Instructions extends Component {
  static propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.shape({
      ...Types.instruction
    })).isRequired,
    onChangeOrder: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    const data = {}
    for (const [index, instruction] of props.instructions.entries()) {
      data[index] = {...instruction}
    }
    this.state = { data }
  }

  renderRow = ({data, active}) => {
    return <Row data={data} active={active} />
  }

  render () {
    return (
      <View style={s.container}>
        <SortableList
          style={s.list}
          contentContainerStyle={s.contentContainer}
          data={this.state.data}
          renderRow={this.renderRow}
          onChangeOrder={this.props.onChangeOrder} />
      </View>
    )
  }
}
