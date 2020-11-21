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

const robot = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  connection: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired,
  params: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      defaultIndex: PropTypes.number.isRequired
    })
  ),
  commands: PropTypes.shape({
    stop: PropTypes.string.isRequired
  }),
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cmd: PropTypes.string.isRequired,
      showDuration: PropTypes.bool
    }).isRequired
  ).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
          cmd: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
}).isRequired

const Types = {
  error,
  user,
  instruction,
  bluetoothDevice,
  sound,
  robot
}

export default Types
