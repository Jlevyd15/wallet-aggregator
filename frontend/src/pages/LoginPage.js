import React, { Component } from 'react';

import Login from '../components/Login'
import './LoginPage.css'

export class LoginPage extends Component {
	render() {
		return (
			<div className="login-page-container">
				<h1>Login</h1>
				<Login />
			</div>
		);
	}
}

export default LoginPage
