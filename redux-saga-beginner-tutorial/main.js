import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
// import rootReducer from './src/Reducers'
import rootReducer from './reducer'
import rootSaga from './src/Sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      login={() => action('LOGIN_REQUEST', { username: "abc", password: "pw" })}
      logout={() => action('LOGOUT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
