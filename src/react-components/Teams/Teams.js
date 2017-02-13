import React, { Component, PropTypes } from 'react';
import Svelte from 'react-svelte-components';
import TeamsSvelte from '../../svelte-components/Teams/Teams.svelte';

class Teams extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { teams, onGetTopTeams, onGetAllTeams } = this.props;
		return(
			<div>
				<Svelte
					src={TeamsSvelte}
					teams={teams}
				/>
				<button onClick={onGetAllTeams}>Get All Teams</button>
				<button onClick={onGetTopTeams}>Reset Teams</button>
			</div>
		);
	}
}

Teams.propTypes = {
	teams: PropTypes.array,
	onGetTopTeams: PropTypes.func,
	onGetAllTeams: PropTypes.func
};

Teams.defaulProps = {
	teams: []
};

export default Teams;
