import { UPDATE_FIELD } from './actionTypes' 

export const fields = {
	change: (id, value) => ({ type: UPDATE_FIELD, id, value })
}