import React from 'react'
import PropTypes from 'prop-types'
import Register from '../components/Register'
import './RegisterPage.css'

const RegisterPage = ({ children }) => {
	return (
		<div className="register-page-container">
			<h1>Register</h1>
			<Register />
		</div>
	)
}

RegisterPage.propTypes = {
	children: PropTypes.node
}

export default RegisterPage