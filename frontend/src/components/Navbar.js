import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends Component {
	render() {
		return (
			<nav className='navbar-container'>
				<ul>
					<li><Link to={'/'}>Home</Link></li>
					<li><Link to={'/'}>Dashboard</Link></li>
					<li><Link to={'/'} >sign-up</Link></li>
					<li><Link to={'login'}>Login</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Navbar