import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default
    store.replaceReducer(nextReducer)
  })
}

export default store
