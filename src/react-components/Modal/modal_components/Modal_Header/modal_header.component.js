import React from 'react';
import styles from './_modal_header.scss';
import _ from 'lodash';

const ModalHeaderComponent = ( {headerClassName, title, handleClickExit, theme} ) => {

	// Theming
	let style = {};
	if (theme) {
		style = {
			background	: _.get(theme, 'primary_color'),
			color		: _.get(theme, 'secondary_color')
		};
	}

	return (
		<div style={style} className={`${headerClassName}  ${styles.modalHeader}`}>
			<span style={style} className={styles.title}>{title}</span>
			<span className={styles.exit} onClick={handleClickExit}>x</span>
		</div>

	);

};

ModalHeaderComponent.propTypes = {
	headerClassName	: React.PropTypes.string, // TODO: have default
	title 			: React.PropTypes.string.isRequired,
	handleClickExit	: React.PropTypes.func.isRequired
};


export default ModalHeaderComponent;