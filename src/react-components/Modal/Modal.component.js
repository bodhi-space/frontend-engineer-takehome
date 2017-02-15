import React from 'react';

var Modal = React.createClass({

    propTypes: {
        text        : React.PropTypes.string.isRequired,    // TODO: this should be components!
        title       : React.PropTypes.string.isRequired,
        confirm_text: React.PropTypes.string,
        cancel_text : React.PropTypes.string
    },

    render() {
        return (
            <div className='modal'>
                // <ModalHeaderComponent headerClassName="modal" title={this.props.title}></ModalHeaderComponent>
                <div>{this.props.text}</div>
                // <ModalFooterComponent confirm_text={this.props.confirm_text} cancel_text={this.props.cancel_text}></ModalFooterComponent>
            </div>
        );
    }

});

export default Modal;