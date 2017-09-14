import React from 'react'
import { connect } from 'react-redux'
import { fields } from '../actions'


class Input extends React.Component {

	render() {
		const { id, placeholder, handleOnChange } = this.props
		return (
            <input 
            	id={id}
            	placeholder={placeholder}
            	className="form-control" 
            	type="text" 
            	onChange={e => handleOnChange(id, e.target.value)}
            />
		)
	}
}

Input.propTypes = {
	id: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	handleOnChange: React.PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
	handleOnChange: (id, value) => dispatch(fields.change(id, value))
})

export default connect(null, mapDispatchToProps)(Input)