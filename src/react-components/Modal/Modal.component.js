import React from 'react';
import styles from './_Modal.scss';
import ModalHeaderComponent from './modal_components/Modal_Header/modal_header.component.js';
import ModalFooterComponent from './modal_components/Modal_Footer/modal_footer.component.js';
import ThemeHOCFactory from '../ThemeHOC/Theme.HOC.js';


class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true
        };

        this.handleClickExit            = this.handleClickExit.bind(this);
        this.internalHandleClickConfirm = this.internalHandleClickConfirm.bind(this);
        this.internalHandleClickCancel  = this.internalHandleClickCancel.bind(this);
    }

    handleClickExit(e) {
        this.setState({ show: false });
        console.log('closing modal!', e);
    }

    internalHandleClickCancel(e) {
        this.props.handleClickCancel(e);
        this.handleClickExit(e);
    }

    internalHandleClickConfirm(e) {
        this.props.handleClickConfirm(e);
        this.handleClickExit(e);
    }


    render() {

        // Create themed components
        let ThemedModalHeaderComponent = ThemeHOCFactory(this.props.theme)(ModalHeaderComponent);
        let ThemedModalFooterComponent = ThemeHOCFactory(this.props.theme)(ModalFooterComponent);


        if (this.state.show) {
            return (
                <div className={`${styles.modal} ${this.state.show ? styles.show : styles.hide}`}>
                    <ThemedModalHeaderComponent
                        headerClassName={styles.modalHeaderPosition}
                        title={this.props.title}
                        handleClickExit={this.handleClickExit}>
                    </ThemedModalHeaderComponent>

                    <div className={styles.textBlock}>
                        {this.props.text}
                    </div>

                    <ThemedModalFooterComponent
                        footerClassName={styles.modalFooterPosition}
                        confirm_text={this.props.confirm_text}
                        cancel_text={this.props.cancel_text}
                        handleClickConfirm={this.internalHandleClickConfirm}
                        handleClickCancel={this.internalHandleClickCancel}>
                    </ThemedModalFooterComponent>
                </div>
            );

        } else {
            return (
                <div className={`${styles.modal} ${this.state.show ? styles.show : styles.hide}`}></div>
                );
        }

    }

}

Modal.propTypes = {
    text                : React.PropTypes.string.isRequired,
    title               : React.PropTypes.string.isRequired,
    confirm_text        : React.PropTypes.string,
    cancel_text         : React.PropTypes.string,
    handleClickConfirm  : React.PropTypes.func,
    handleClickCancel   : React.PropTypes.func 
};


export default Modal;