import React from 'react';
import ModalButtonComponent from '../Modal_Button/modal_button.component.js';
import styles from './modal_footer.scss';

const ModalFooterComponent = ( {confirm_text, cancel_text, handleClickConfirm, handleClickCancel} ) => {

	return (
		<div className={styles.modalFooterPosition}>
			<ModalButtonComponent 
				buttonClassName='confirmButton'
				callback={handleClickConfirm}
				text={confirm_text}>
			</ModalButtonComponent>
			<ModalButtonComponent 
				buttonClassName='cancelButton'
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