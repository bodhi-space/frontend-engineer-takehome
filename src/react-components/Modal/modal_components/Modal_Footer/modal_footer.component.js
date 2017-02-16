import React from 'react';
import ModalButtonComponent from '../Modal_Button/modal_button.component.js';

const ModalFooterComponent = ( {confirm_text, cancel_text, handleClickConfirm, handleClickCancel} ) => {

	return (
		<div>
			<ModalButtonComponent 
				className='left'
				buttonClassName='confirm-button'
				callback={handleClickConfirm}
				text={confirm_text}>
			</ModalButtonComponent>
			<ModalButtonComponent 
				className='right'
				buttonClassName='cancel-button'
				callback={handleClickCancel}
				text={cancel_text}>
			</ModalButtonComponent>
		</div>
	);

};

ModalFooterComponent.propTypes = {
	confirm_text		: React.PropTypes.string,
	cancel_text			: React.PropTypes.string,
	handleClickConfirm	: React.PropTypes.func,
	handleClickCancel	: React.PropTypes.func
};

export default ModalFooterComponent;