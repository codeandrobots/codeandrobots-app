import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveRobot: ['robot'],
  updateRobot: ['robot'],
  deleteRobot: ['robot']
})

export { Types }
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  robots: null
})

/* ------------- Selectors ------------- */

export const Selectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const save = (state, action) => {
  const robots = (state.robots) ? JSON.parse(JSON.stringify(state.robots)) : {}

  const { robot } = action
  if (!robot || !robot.id) {
    console.warn('Invalid robot')
    console.warn(robot)
    return state
  }
  robots[robot.id] = robot

  return state.merge({ robots })
}

export const update = (state, action) => {
  const robots = (state.robots) ? JSON.parse(JSON.stringify(state.robots)) : {}

  const { robot } = action
  if (!robot || !robot.id || !robots[robot.id]) {
    console.warn('Invalid robot')
    console.warn(robot)
    return state
  }
  robots[robot.id] = {...robots[robot.id], ...robot}

  return state.merge({ robots })
}

export const deleteRobot = (state, action) => {
  const robots = (state.robots) ? JSON.parse(JSON.stringify(state.robots)) : {}

  const { robot } = action
  if (!robot || !robot.id || !robots[robot.id]) {
    console.warn('Invalid robot')
    console.warn(robot)
    return state
  }
  delete robots[robot.id]

  return state.merge({ robots })
}

export const reset = (state, action) => {
  return state.merge(Immutable.asMutable(INITIAL_STATE))
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ROBOT]: save,
  [Types.UPDATE_ROBOT]: update,
  [Types.DELETE_ROBOT]: deleteRobot
})
