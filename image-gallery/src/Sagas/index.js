import {
    fork
} from 'redux-saga/effects'
import watchForLoadImages from '../Sagas/watchForLoadImages'
import loginFlow from '../Sagas/loginFlow'

export default function* rootSaga() {
    yield [
        fork(watchForLoadImages),
        fork(loginFlow)        
    ];
}