import React, { Component, PropTypes } from 'react';
import Svelte from 'react-svelte-components';
import CounterSvelte from '../../svelte-components/Counter/Counter.svelte';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onResetHandler = this.onResetHandler.bind(this);
	}

	render() {
		return(
			<div>
				<Svelte
					src={CounterSvelte}
					count={this.state.count}
				/>
				<button onClick={this.onClickHandler}>Increment Count</button>
				<button onClick={this.onResetHandler}>Reset Count</button>
			</div>
		);
	}

	onClickHandler() {
		let { count } = this.state;
		this.setState({count: count + 1});
	}

	onResetHandler() {
		this.setState({count: 0});
	}
}

export default Counter;
