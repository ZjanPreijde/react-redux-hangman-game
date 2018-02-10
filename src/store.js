// src/store.js

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

// Import 0 to many reducers,
//  reducers/index.js returns reducers if defined
import reducers from './reducers'
const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export default store