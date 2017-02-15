import React from 'react';

var ModalHeaderComponent = React.createClass({

	// TODO: need to scope css
	propTypes: {
		headerClassName	: React.PropTypes.string, // TODO: have default
		title 			: React.PropTypes.string.isRequired
	},

	constructor: function(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	},

	handleClick: function(e) {
		// TODO: exit
		// will need to communicate up to modal?
	},

	render() {
		return (
			<div className={this.props.className || 'default-header'}>
				<span className="title">{this.props.title}</span>
				<span className="x" onClick={this.handleClick}>x</span>
			</div>
		);
	}

});

export default ModalHeaderComponent;