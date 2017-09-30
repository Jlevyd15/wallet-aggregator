import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PageMessage.css'

export class PageMessage extends Component {
	render() {
		return (
			<div className="PageMessage-container info">Page Level Message!</div>
		);
	}
}

PageMessage.propTypes = {
	id: PropTypes.isRequired,
	message: PropTypes.string,
	severity: PropTypes.string,
	open: PropTypes.bool
}


// TODO extract the PageMessage state from redux assign to props here
// mapStateToProps = (state, props) => ({

// })

export default PageMessage