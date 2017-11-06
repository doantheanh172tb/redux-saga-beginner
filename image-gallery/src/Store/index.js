import promise from "redux-promise-middleware";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../Reducers';
import sagas from '../Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = applyMiddleware(promise(), sagaMiddleware)(createStore)(reducer);//apply dc reducer vao he thong
sagaMiddleware.run(sagas);//apply saga vao he thong
export default store;