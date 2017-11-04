export default function loginFlowReducer(state = 0, action) {
    console.log("Reducer/loginFlowReducer");
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return state
        case 'LOGIN_SUCCESS':
            return state
        case 'LOGIN_ERROR':
            return state
        case 'LOGOUT':
            return state
        default:
            return state
    }
}
