import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        <Gallery />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
