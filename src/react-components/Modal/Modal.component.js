import React from 'react';
import css from './Modal.css';
import ModalHeaderComponent from './modal_components/Modal_Header/modal_header.component.js';
import ModalFooterComponent from './modal_components/Modal_Footer/modal_footer.component.js';

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

    // TODO: handleClickConfirm, handleClickCancel needs to call handleClickExit


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

        if (this.state.show) {
            return (
                <div className={`modal ${this.state.show ? 'show' : 'hide'}`}>
                    <ModalHeaderComponent 
                        headerClassName="modalHeader" 
                        title={this.props.title}
                        handleClickExit={this.handleClickExit}
                    ></ModalHeaderComponent> 

                    <div>{this.props.text}</div>

                    <ModalFooterComponent 
                        confirm_text={this.props.confirm_text}
                        cancel_text={this.props.cancel_text}
                        handleClickConfirm={this.internalHandleClickConfirm}
                        handleClickCancel={this.internalHandleClickCancel}
                    ></ModalFooterComponent>
                </div>
            );

        } else {
            return (
                <div className={`modal ${this.state.show ? 'show' : 'hide'}`}></div>
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