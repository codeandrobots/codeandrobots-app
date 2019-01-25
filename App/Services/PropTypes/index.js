import PropTypes from 'prop-types'

const user = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
})

const Types = {
  user
}

export default Types
