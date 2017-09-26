import React from 'react'
import PropTypes from 'prop-types'
import Register from '../components/Register'

const RegisterPage = ({ children }) => {
	return (
		<div>
			<h1>Register</h1>
			<Register />
		</div>
	)
}

RegisterPage.propTypes = {
	children: PropTypes.node
}

export default RegisterPage