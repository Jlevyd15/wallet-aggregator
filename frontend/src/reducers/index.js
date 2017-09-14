// import individual reducers here
import fieldReducer from './fieldReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	fields: fieldReducer
});
export default rootReducer;