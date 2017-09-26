import { UPDATE_FIELD, SUBMIT_FORM, ERROR_FIELD } from './actionTypes' 

export const fields = {
	change: (id, value, dataType) => ({ type: UPDATE_FIELD, id, value, dataType }),
	error: (id, valid, error) => ({ type: ERROR_FIELD, valid, id, error })
}

export const forms = {
	submit: (id, validationResults) => ({ type: SUBMIT_FORM, id, validationResults })
}