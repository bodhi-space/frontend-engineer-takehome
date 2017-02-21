import React from 'react';
import ThemeHOCFactory from '../../../ThemeHOC/Theme.HOC.js';
import ModalButtonComponent from '../Modal_Button/modal_button.component.js';
import styles from './_modal_footer.scss';

const ModalFooterComponent = ( {footerClassName, confirm_text, cancel_text, handleClickConfirm, handleClickCancel, theme} ) => {

	let ThemedButtonComponent = ThemeHOCFactory(theme)(ModalButtonComponent);

	return (
		<div className={`${footerClassName} ${styles.modalFooter}`}>
			<ThemedButtonComponent 
				buttonClassName={styles.confirmButton}
				onClick={handleClickConfirm}
				text={confirm_text}>
			</ThemedButtonComponent>
			<ModalButtonComponent 
				buttonClassName={styles.cancelButton}
				onClick={handleClickCancel}
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