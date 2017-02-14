import React from 'react';

var ButtonComponent = React.createClass({
	render() {
		return <div>{this.props.name}</div>
	}
});

export default ButtonComponent;