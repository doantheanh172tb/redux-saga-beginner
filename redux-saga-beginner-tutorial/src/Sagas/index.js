import { all } from 'redux-saga/effects'

import counterSaga from './counterSaga'
import loginFlow from './loginFlowSaga'

export default function* rootSaga() {
    yield all([
        counterSaga(),
        loginFlow()
    ])
}