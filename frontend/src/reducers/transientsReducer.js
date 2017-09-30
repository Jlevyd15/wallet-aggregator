import Immutable from 'immutable'
import TransientsRecord from '../records/TransientRecord'

import { TOGGLE_TRANSIENT } from '../actions/actionTypes'

const transientsReducer = (transients = Immutable.Map({}), action) => {
	switch(action.type) {
		case TOGGLE_TRANSIENT:
			return transients.update(action.id, new TransientsRecord(), transient => {
				return transient.merge({
					id: action.id,
					message: action.message,
					severity: action.severity,
					open: action.open ? action.open : !transient.open
				})
			})
		default:
			return transients
	}
}

export default transientsReducer