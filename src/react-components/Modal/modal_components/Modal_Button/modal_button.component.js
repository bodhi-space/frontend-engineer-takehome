import React from 'react';
import styles from './modal_button.scss';

const ModalButtonComponent = ( {buttonClassName, callback, text} ) => {
	return (
		<button className={buttonClassName || styles.button} onClick={callback}>
			{text}
		</button>
	);
};

ModalButtonComponent.propTypes = {
	buttonClassName	: React.PropTypes.string,
	callback		: React.PropTypes.func,
	text			: React.PropTypes.string.isRequired
};

export default ModalButtonComponent;