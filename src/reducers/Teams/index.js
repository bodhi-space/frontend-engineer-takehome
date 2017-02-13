import * as Types from '../../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case Types.GET_TOP_TEAMS:
		case Types.GET_ALL_TEAMS:
			return action.teams;
		default:
			return state;
	}
};