import React from 'react';
import ModalButtonComponent from '../Modal_Button/modal_button.component.js';
import styles from './modal_footer.scss';

const ModalFooterComponent = ( {footerClassName, confirm_text, cancel_text, handleClickConfirm, handleClickCancel} ) => {

	return (
		<div className={`${footerClassName} ${styles.modalFooter}`}>
			<ModalButtonComponent 
				buttonClassName={styles.confirmButton}
				callback={handleClickConfirm}
				text={confirm_text}>
			</ModalButtonComponent>
			<ModalButtonComponent 
				buttonClassName={styles.cancelButton}
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