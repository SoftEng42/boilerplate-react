import { createStore, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import reducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

const configureStore = () => {
  const middleware = [thunk]
  return createStore(persistedReducer , applyMiddleware(...middleware))
}

export { configureStore}
