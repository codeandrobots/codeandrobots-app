import { select, call } from 'redux-saga/effects'

/* ------------- Async Functions ------------- */

export function * setAuth (api) {
  const state = yield select()
  if (state && state.credentials && state.credentials.jwt) {
    yield call(api.setAuthToken, state.credentials.jwt)
  } else {
    yield call(api.removeAuthToken)
  }
}

export function * getLoggedInUser () {
  const state = yield select()
  if (state && state.credentials && state.credentials.jwt && state.credentials.user) {
    return state.credentials.user
  } else {
    return null
  }
}
