// import individual reducers here
import fieldReducer from './fieldReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	fields: fieldReducer,
	forms: formReducer
});
export default rootReducer;