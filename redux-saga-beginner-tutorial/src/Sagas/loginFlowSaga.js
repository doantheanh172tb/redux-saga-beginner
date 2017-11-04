import { delay } from 'redux-saga'
import { put, takeEvery, all, take, call } from 'redux-saga/effects'
import Api from "../../api"

function* authorize(username, password) {
    console.log("sagas:loginFlow:authorize")
    console.log(username, password)
    try {
        const token = yield call(Api.authorize, username, password)
        console.log("sagas:loginFlow:authorize::token")
        console.log(token);
        yield put({ type: 'LOGIN_SUCCESS', token })
        return token
    } catch (error) {
        yield put({ type: 'LOGIN_ERROR', error })
    }
}

export function* loginFlow() {
    while (true) {
        //   const {user, password} = yield take('LOGIN_REQUEST')

        console.log("sagas:loginFlow::take->LOGIN_REQUEST")
        yield take('LOGIN_REQUEST')

        const token = yield call(authorize, "USERNAME", "PASSWORK")
        if (token) {
            yield call(Api.storeItem, {token})

            console.log("sagas:loginFlow::take->LOGOUT")
            yield take('LOGOUT')

            yield call(Api.clearItem, 'token')
        }
    }
}

// single entry point to start all Sagas at once
export default loginFlow;