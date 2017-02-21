import React from 'react';
import Styles from './_Button.scss';

var ButtonComponent = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        size: React.PropTypes.string,
        onClick: React.PropTypes.func,
        isDisabled: React.PropTypes.bool
    },
    getInitialState() {
        return {
            isDisabled: false
        };
    },
    defaultProps: {
        type: 'primary'
    },
    componentWillReceiveProps(props) {
        this.setState({
            isDisabled: props.isDisabled
        });
    },
	render() {
        var classes = [
            Styles.button,
            this.props.type === 'secondary' ? Styles.secondary : '',
            this.props.size === 'large' ? Styles.large : ''
        ];

		return (
            <button  
                className={classes.join(' ')} 
                onClick={this.props.onClick}
                disabled={this.state.isDisabled}
            >{this.props.label}</button>
        );
	}
});

export default ButtonComponent;