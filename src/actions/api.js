import * as Types from './types';

export const getTopTeams = () => {
	return (dispatch) => {
		dispatch({
			type: Types.GET_TOP_TEAMS,
			teams: [
				{ name: 'Chelsea'},
				{ name: 'Tottenham'},
				{ name: 'Arsenal'},
				{ name: 'Liverpool'},
				{ name: 'Manchester City'}
			]
		});
	};
};

export const getAllTeams = () => {
	return (dispatch) => {
		dispatch({
			type: Types.GET_ALL_TEAMS,
			teams: [
				{ name: 'Chelsea'},
				{ name: 'Tottenham'},
				{ name: 'Arsenal'},
				{ name: 'Liverpool'},
				{ name: 'Manchester City'},
				{ name: 'Manchester United'},
				{ name: 'Everton'},
				{ name: 'West Brom'},
				{ name: 'Stoke City'},
				{ name: 'West Ham United'},
				{ name: 'Southampton'},
				{ name: 'Burnley'},
				{ name: 'Watford'},
				{ name: 'Bournemouth'},
				{ name: 'Swansea City'},
				{ name: 'Middlesbrough'},
				{ name: 'Leicester City'},
				{ name: 'Hull City'},
				{ name: 'Crystal Palace'},
				{ name: 'Sunderland'}
			]
		});
	};
};