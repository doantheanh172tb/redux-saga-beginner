import { defaultLoginState } from './initialState'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../Constants/actionsType'

export default function loginFlowReducer(state = defaultLoginState, action) {
    console.log("Reducer/loginFlowReducer");
    console.log(state, action)
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state
                , loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state
                , loading: false
                , userInfo: {
                    name: "Doan The Anh"
                    , token: "1313131313132311321"
                }
            }
        case LOGIN_ERROR:
            return {
                ...state
                , loading: false
                , error: "chỉ là error thôi mà"
            }
        case LOGOUT:
            return {
                ...state
            }
        default:
            return state
    }
}


