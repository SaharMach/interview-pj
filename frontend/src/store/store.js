import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { msgsReducer } from './msgs.reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    msgsModule: msgsReducer
})

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store