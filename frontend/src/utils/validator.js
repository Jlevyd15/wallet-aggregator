
const dataTypes = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line no-useless-escape
	password: /^[a-zA-Z]\w{3,14}$/
}


// returns in this format
// {
// 	valid: {bool}
// 	fieldResults: {array of objects}
// }
export const formValidator = fields => {
	const fieldResults = fields.map(field => {
		if (field) {
			const _field = field.toJS()
			const fieldValid = dataTypes[_field.dataType].test(_field.value)
			return {
				id: _field.Id,
				valid: fieldValid,
				error: fieldValid ? '' : `${_field.Id} is not a valid ${_field.dataType}, please enter a valid one`,
			}
		} else {
			return {}
		}
		
	})
	return {
		valid: fieldResults.every(fieldResult => fieldResult.hasOwnProperty('valid') && fieldResult.valid === true),
		fieldResults
	}
}