import { delay } from 'redux-saga'
import { put, takeEvery, all, take, call } from 'redux-saga/effects'

// ...
export function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    console.log("abccccccccccccccccccc")
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* authorize(user, password) {
    try {
    //   const token = yield call(Api.authorize, user, password)
    const token= "sssssssss";
      yield put({type: 'LOGIN_SUCCESS', token})
      return token
    } catch(error) {
      yield put({type: 'LOGIN_ERROR', error})
    }
}

export function* loginFlow() {
    while (true) {
      const {user, password} = yield take('LOGIN_REQUEST')
      console.log("LOGIN_REQUEST done")
      const token = yield call(authorize, user, password)
      if (token) {
        // yield call(Api.storeItem, {token})
        yield take('LOGOUT')
        console.log("LOGOUT done")
        // yield call(Api.clearItem, 'token')
      }
    }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync(),
      loginFlow()
    ])
}