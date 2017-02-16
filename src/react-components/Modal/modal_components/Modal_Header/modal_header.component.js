import React from 'react';

const ModalHeaderComponent = ({ headerClassName, title, handleClickExit }) => {

	return (
		<div className={headerClassName || 'modalHeader'}>
			<span className="title">{title}</span>
			<span className="x" onClick={handleClickExit}>EXIT</span>
		</div>

	);

};

ModalHeaderComponent.propTypes = {
	headerClassName	: React.PropTypes.string, // TODO: have default
	title 			: React.PropTypes.string.isRequired,
	handleClickExit	: React.PropTypes.func.isRequired
};


export default ModalHeaderComponent;