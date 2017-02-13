import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HelloWorld from '../react-components/HelloWorld/HelloWorld';
import Counter from '../react-components/Counter/Counter';
import Teams from '../react-components/Teams/Teams';
import { getTopTeams, getAllTeams } from '../actions/api'

class Main extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getTopTeams();
	}

	render() {
		const { teams, getAllTeams, getTopTeams } = this.props;
		return(
			<div>
				<HelloWorld /> <hr/>
				<Counter /> <hr/>
				<Teams
					teams={teams}
					onGetAllTeams={getAllTeams}
					onGetTopTeams={getTopTeams}
				/>
			</div>
		);
	}
}

Main.propTypes = {
	getTopTeams: PropTypes.func,
	getAllTeams: PropTypes.func
};

Main.defaultProps = {
	
};

function mapStateToProps(state) {
	return {
		teams: state.teams
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getTopTeams: getTopTeams,
		getAllTeams: getAllTeams
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
