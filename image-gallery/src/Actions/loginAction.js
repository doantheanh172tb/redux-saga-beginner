import {LOGIN_REQUEST_TYPE} from '../Constants/actionsType'

export function loginRequest(username, password) {
    return {
        type: LOGIN_REQUEST_TYPE
        , username: username
        , password: password
    }
}
