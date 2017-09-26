import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { forms, fields } from '../actions'

import FormError from './FormError'


import { formValidator } from '../utils/validator'

export class Form extends Component {
	constructor() {
		super()
		this.formCallback = this.formCallback.bind(this)
	}

	formCallback(e) {
		e.preventDefault()
		// validate the form and fields
		const fieldValidationResults = formValidator(this.props.formFields)
		// set state of fields validation in redux
		fieldValidationResults.fieldResults.forEach(result => this.props.handleFieldErrors(result.id, result.valid, result.error))
		// set state of form validation in redux
		this.props.handleFormSubmit(this.props.id, fieldValidationResults)
		console.log(fieldValidationResults)
		// no form errors continue submitting
		if (this.props.submitHandler && fieldValidationResults.valid) this.props.submitHandler(e)

	}

	render() {
		return (
			<div>
				<FormError form={this.props.form} />
				<form id={'login.Form'} onSubmit={this.formCallback}>
					{this.props.children}
				</form>
			</div>
		);
	}
}

Form.propTypes = {
	id: PropTypes.string,
	submitHandler: PropTypes.func.isRequired,
	fieldIds: PropTypes.array.isRequired
}

const mapStateToProps = (state, props) => ({
	formFields: props.fieldIds.map(fieldId => state.fields.get(fieldId)),
	form: state.forms.get(props.id)
})

const mapDispatchToProps = dispatch => ({
	handleFormSubmit: (id, valid) => dispatch(forms.submit(id, valid)),
	handleFieldErrors: (id, valid, error) => dispatch(fields.error(id, valid, error))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
