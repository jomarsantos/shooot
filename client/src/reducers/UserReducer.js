import { SUCCESS_LOGIN_ACTION } from '../actions/LoginActions';

const INITIAL_STATE = {
	details: {},
	loggedIn: false
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
		case SUCCESS_LOGIN_ACTION:
			return {
				...state,
				details: action.userDetails,
				loggedIn: true
			};
	  default:
	    return state;
  }
}
