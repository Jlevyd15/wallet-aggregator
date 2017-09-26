import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Button.css'

export class Button extends Component {
	render() {
		const { children, btnStyle, type } = this.props 
		return (
			<button className={btnStyle} type={type}>{children}</button>
		);
	}
}

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	btnStyle: PropTypes.string,
	type: PropTypes.string,
}

export default Button