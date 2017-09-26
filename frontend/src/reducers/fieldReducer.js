import Immutable from 'immutable';
import FieldRecord from '../records/fieldRecord';

import { UPDATE_FIELD, ERROR_FIELD } from '../actions/actionTypes';


const fieldReducer = (fields = Immutable.Map({}), action) => {
	// console.log(action)
	switch (action.type) {
		case UPDATE_FIELD: {
			return fields.update(action.id, new FieldRecord(), field => {
				return field.merge({
					Id: action.id,
					value: action.value,
					dataType: action.dataType
				})
			})
		}
		case ERROR_FIELD: {
			if (!fields.get(action.id)) return fields
			return fields.update(action.id, field => {
				return field.merge({
					valid: action.valid,
					error: action.error
				})
			})
		}
		default:
			return fields;
	}
}

export default fieldReducer;