import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'

import { sayHelloSaga } from './sagas';
const store = createStore(
    reducer,
    applyMiddleware(createSagaMiddleware(sayHelloSaga))
);

ReactDOM.render(
    <Provider store={store}>
        <Gallery />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
