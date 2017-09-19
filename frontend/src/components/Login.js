import React, { Component } from 'react';
import Input from './Input'


export class Login extends Component {
	render() {
		return (
			<form>
				<label>Email</label>
				<Input id={'id1'} />
				<label>Password</label>
				<Input id={'id1'} />
				<button>Submit</button>
	      	</form>	
		);
	}
}

export default Login