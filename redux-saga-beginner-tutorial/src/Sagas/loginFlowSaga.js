import { delay } from 'redux-saga'
import { put, takeEvery, all, take, call, fork, cancel, cancelled } from 'redux-saga/effects'
import Api from "../../api"

export function* authorize(username, password) {
    try {
        const token = yield call(Api.authorize, username, password)
        console.log("sagas:loginFlow:authorize::token")
        console.log(token);
        yield put({ type: 'LOGIN_SUCCESS', token })
        yield call(Api.storeItem, { token })
        return token
    } catch (error) {
        yield put({ type: 'LOGIN_ERROR', error })
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
            yield put({ type: 'LOGOUT' })
        }
    }
}

export function* loginFlow() {
    while (true) {
        console.log("sagas:loginFlow::take->LOGIN_REQUEST")
        //   const {user, password} = yield take('LOGIN_REQUEST')
        yield take('LOGIN_REQUEST')

        // yield fork(authorize, user, password)
        const task = yield fork(authorize, "USERNAME", "PASSWORD")

        console.log("sagas:loginFlow::take->['LOGOUT', 'LOGIN_ERROR']")
        const action = yield take(['LOGOUT', 'LOGIN_ERROR'])

        if (action.type === 'LOGOUT')
            yield cancel(task)

        console.log("sagas:loginFlow::clearItem('token')")
        yield call(Api.clearItem, 'token')
    }
}

// single entry point to start all Sagas at once
export default loginFlow;