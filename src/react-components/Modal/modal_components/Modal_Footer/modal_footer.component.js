import React from 'react';

var ModalFooterComponent = React.createClass({

	propTypes: {
		confirm_text: React.propTypes.string,
		cancel_text	: React.propTypes.string
	},

	constructor: function(props) {
		super(props);
		this.handleClickConfirm = this.handleClickConfirm.bind(this);
		this.handleClickCancel 	= this.handleClickCancel.bind(this);
	},

	handleClickConfirm: function(e) {
		// TODO
	},
	handleClickCancel: function(e) {
		// TODO
	},

	render() {
		return (
			<div className={this.props.className}>
				<ModalButtonComponent 
					className='left'
					buttonClassName='confirm-button'
					callback={this.handleClickConfirm}
					text='SAVE'>
				</ModalButtonComponent>
				<ModalButtonComponent 
					className='right'
					buttonClassName='cancel-button'
					callback={this.handleClickCancel}
					text='CANCEL'>
				</ModalButtonComponent>
			</div>
		);
	}

});

export default ModalFooterComponent;