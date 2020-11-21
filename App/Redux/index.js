import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from './RootSaga'
import ReduxPersist from '../Config/ReduxPersist'

import { reducer as StartupReducer } from './StartupRedux'
import { RobotsReducer } from 'App/Modules/Robot'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  startup: StartupReducer,
  nav: require('./NavigationRedux').reducer,
  robots: RobotsReducer
})

const loadSagas = (sagasManager, sagaMiddleware) => {
  // Load your sagas here, e.g.
  // sagasManager = sagaMiddleware.run(Saga)
}

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  loadSagas(sagasManager, sagaMiddleware)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('./RootSaga').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)

        loadSagas(sagasManager, sagaMiddleware)
      })
    })
  }

  return store
}
