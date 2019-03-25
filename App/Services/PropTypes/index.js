import PropTypes from 'prop-types'

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

const Types = {
  user,
  instruction
}

export default Types
