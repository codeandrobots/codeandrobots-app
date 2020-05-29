import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

const s = {
  ...Styles,
  view: {
    width: '100%'
  },
  label: {
    ...Styles.text,
    color: Colors.grey,
    width: '100%',
    marginBottom: Metrics.unit / 2
  },
  labelFocused: {
    color: Colors.primary
  },
  labelError: {
    color: Colors.error
  },
  helperText: {
    ...Styles.text,
    color: Colors.grey,
    width: '100%',
    marginTop: Metrics.unit / 2
  },
  helperTextError: {
    color: Colors.error
  },
  inputView: {
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: Metrics.unit,
    paddingHorizontal: Metrics.unit * 2,
    paddingVertical: Metrics.unit * 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  inputViewFocused: {
    borderColor: Colors.primary
  },
  inputViewError: {
    borderColor: Colors.error
  },
  input: {
    alignSelf: 'center',
    flex: 1,
    ...Styles.text,
    paddingTop: 0
  }
}

export default StyleSheet.create(s)
