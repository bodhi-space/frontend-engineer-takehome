import React from 'react';
import styles from './_Button.scss';

const ModalButtonComponent = ( {buttonClassName, onClick, text, isDisabled, theme} ) => {

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
            className={buttonClassName || styles.button} 
            onClick={onClick}
            disabled={isDisabled}>
            {text}
        </button>
    );
};

ModalButtonComponent.propTypes = {
    buttonClassName : React.PropTypes.string,
    onClick         : React.PropTypes.func,
    text            : React.PropTypes.string.isRequired,
    isDisabled      : React.PropTypes.bool,
    theme           : React.PropTypes.object
};

export default ModalButtonComponent;