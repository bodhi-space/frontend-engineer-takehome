import React from 'react';
import styles from './modal_header.scss';

const ModalHeaderComponent = ({ headerClassName, title, handleClickExit }) => {

	return (
		<div className={`${headerClassName}  ${styles.modalHeader}`}>
			<span className={styles.title}>{title}</span>
			<span className={styles.exit} onClick={handleClickExit}>X</span>
		</div>

	);

};

ModalHeaderComponent.propTypes = {
	headerClassName	: React.PropTypes.string, // TODO: have default
	title 			: React.PropTypes.string.isRequired,
	handleClickExit	: React.PropTypes.func.isRequired
};


export default ModalHeaderComponent;