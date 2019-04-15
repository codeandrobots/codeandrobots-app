import PropTypes from 'prop-types'

const error = PropTypes.shape({
  message: PropTypes.string
})

const user = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
})

const instruction = {
  type: PropTypes.string,
  iconSet: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  title: PropTypes.string.isRequired
}

const bluetoothDevice = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string
})

const sound = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
})

const Types = {
  error,
  user,
  instruction,
  bluetoothDevice,
  sound
}

export default Types
