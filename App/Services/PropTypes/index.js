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

const Types = {
  error,
  user,
  instruction,
  bluetoothDevice
}

export default Types
