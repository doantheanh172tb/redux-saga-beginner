import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer'
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Gallery />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
