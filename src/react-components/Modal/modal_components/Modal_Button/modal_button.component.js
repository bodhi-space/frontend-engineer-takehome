import React from 'react';

const ModalButtonComponent = ( {buttonClassName, callback, text, theme} ) => {

    // Theming
    let style = {};
    if (theme) {
        style = {
            background: theme.primary_color
        };
    }

    return (
        <button 
            style={style}
            className={buttonClassName} 
            onClick={callback}>
            {text}
        </button>
    );
};

ModalButtonComponent.propTypes = {
    buttonClassName : React.PropTypes.string,
    callback        : React.PropTypes.func,
    text            : React.PropTypes.string.isRequired,
    theme           : React.PropTypes.object
};

export default ModalButtonComponent;