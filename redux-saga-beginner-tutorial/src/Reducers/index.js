import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import loginFlowReducer from './loginFlowReducer'

const rootReducer = combineReducers({
    counterReducer,
    loginFlowReducer
})

export default rootReducer