import React from 'react';

var ModalButtonComponent = React.createClass({
	
	propTypes: {
		buttonClassName	: React.PropTypes.string,
		callback		: React.PropTypes.string,
		text			: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<div className={this.props.className || 'default-button'} onClick={this.props.callback}>
				{this.props.text}
			</div>
		);
	}

});

export default ModalButtonComponent;