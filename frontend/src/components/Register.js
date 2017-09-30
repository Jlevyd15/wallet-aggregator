import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Input from './Input'
import Form from './Form'
import Button from './Button'
import './Register.css'

const fieldIds = [
	'name.Input.Register', 'email.Input.Register', 'email.confirm.Input.Register', 'password.Input.Register', 'password.confirm.Input.Register'
]

export class Register extends Component {
	constructor() {
		super()
		// this.handleSubmit = this.handleSubmit.bind(this)
	}

	// handleSubmit(e) {
	// 	console.log('in handleSubmit', e)
	// 	e.preventDefault()
	// 	const { email, password, history } = this.props

	// 	// get a token from the server and save it in the browser session storage
	// 	fetch(`/token`, {
	// 		method: 'POST',
	// 		headers: new Headers({
	// 			'Content-Type': 'application/x-www-form-urlencoded'
	// 		}),
	// 		body:`password=${password}&email=${email}`
	// 	})
	// 	.then(response => {
	// 		return response.json()
	// 	})
	// 	.then(data => {
	// 		// console.log(data)

	// 		// token is received, save it into session storage for later
	// 		if (data.token) {
	// 			sessionStorage.setItem('token', data.token)
	// 			history.push('/getUsers')
	// 		}
	// 		// this.setState({ token: data.token })
	// 		// this.getUsers()

	// 	}).catch(error => {
	// 		console.error('there was a problem with the request ' + error.message)
	// 	})
	// }

	render() {
		return (
			<div className="register-contianer">
				<Form id={'register.Form'} fieldIds={fieldIds} >
					<div className="register-grid">
						<div className="one fix-bottom"><label>Name</label></div>
						<div className="two"><Input id={'name.Input.Register'} dataType="alpha" /></div>
						<div className="three fix-bottom"><label>Email</label></div>
						<div className="four"><Input id={'email.Input.Register'} dataType="email" /></div>
						<div className="five fix-bottom"><label>Confirm Email</label></div>
						<div className="six"><Input id={'email.confirm.Input.Register'} dataType="email" /></div>
						<div className="seven fix-bottom"><label>Password</label></div>
						<div className="eight"><Input id={'password.Input.Register'} dataType="password" type="password" /></div>
						<div className="nine fix-bottom"><label>Confirm Password</label></div>
						<div className="ten"><Input id={'password.confirm.Input.Register'} dataType="password" type="password" /></div>
						<div className="eleven"><Button btnStyle="btn btn-primary">Register</Button></div>
						<div className="twelve"><Button type="submit" btnStyle="btn btn-secondary">Login</Button></div>
	      			</div>	
		      	</Form>
	      	</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	name: state.fields.getIn(['name.Input', 'value']),
	email: state.fields.getIn(['email.Input', 'value']),
	emailConfirm: state.fields.getIn(['email.confirm.Input', 'value']),
	password: state.fields.getIn(['password.Input', 'value']),
	passwordConfirm: state.fields.getIn(['password.confirm.Input', 'value'])
})

export default connect(mapStateToProps)(withRouter(Register))