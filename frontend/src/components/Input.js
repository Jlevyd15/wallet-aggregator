import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fields } from '../actions'

import './Input.css'

class Input extends React.Component {

	render() {
		const { id, placeholder, handleOnChange, dataType, type } = this.props
		return (
            <input 
            	id={id}
            	placeholder={placeholder}
            	className={this.props.fieldValid ? 'input-control' : 'input-control error'}
            	type={type} 
            	onChange={e => handleOnChange(id, e.target.value, dataType)}
            />
		)
	}
}

Input.defaultProps = {
	type: 'text'
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	handleOnChange: PropTypes.func,
	type: PropTypes.string
}

const mapStateToProps = (state, props) => ({
	fieldValid: state.fields.get(props.id) ? state.fields.getIn([props.id, 'valid']) : true
})

const mapDispatchToProps = (dispatch) => ({
	handleOnChange: (id, value, dataType) => dispatch(fields.change(id, value, dataType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)