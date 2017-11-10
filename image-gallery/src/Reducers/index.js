import { combineReducers } from 'redux'

import ImagesReducer from './imagesReducer'
import LoginFlowReducer from './loginFlowReducer'

const rootReducer = combineReducers({
	ImagesReducer
	, LoginFlowReducer,
});

export default rootReducer;