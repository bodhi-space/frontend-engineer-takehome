import React from 'react';
import Styles from './_Button.scss';

var EchoButton = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        size: React.PropTypes.string,
        onClick: React.PropTypes.func,
        isDisabled: React.PropTypes.bool,
		theme: React.PropTypes.object
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

        let style = {};

        if (this.props.theme) {
            style = {
                background: this.props.theme.primary_color
            };
        }

		return (
            <button  
				style={style}
                className={classes.join(' ')} 
                onClick={this.props.onClick}
                disabled={this.state.isDisabled}
            >{this.props.label}</button>
        );
	}
});

export default EchoButton;