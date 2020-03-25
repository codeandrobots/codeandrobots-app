import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import styles, { stylesLight, stylesPrimary } from './Styles'

export default class Tabs extends Component {
  static propTypes = {
    theme: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.string),
    onTabPress: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeTab: null
    }
  }

  componentWillMount () {
    const { tabs } = this.props
    if (tabs && tabs.length > 0) {
      this.setState({ activeTab: tabs[0] })
    }
  }

  onTabPress = (tab) => {
    const { tabs, onTabPress } = this.props
    this.setState({ activeTab: tab })
    if (onTabPress) {
      onTabPress(tab, tabs.indexOf(tab))
    }
  }

  render () {
    const { theme = 'default', tabs } = this.props
    const { activeTab } = this.state
    const s = (theme === 'light')
      ? stylesLight
      : (theme === 'primary')
        ? stylesPrimary
        : styles
    const flexStyle = {
      flex: (tabs && tabs.length > 0) ? (1 / tabs.length) : 0
    }
    return (
      <View style={s.view}>
        {tabs.map((tab) => {
          return (
            <TouchableOpacity
              key={uuid.v4()}
              style={[s.tab, flexStyle, (activeTab === tab) ? s.tab_active : null]}
              onPress={() => { this.onTabPress(tab) }}>
              <Text style={s.text}>{tab}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}
