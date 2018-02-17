import { INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION } from '../actions/GeneralActions';
import { SUCCESS_LOGIN_ACTION } from '../actions/LoginActions';

const INITIAL_STATE = {
	user: {},
	loggedIn: false
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
		case INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION:
			return {
				...state,
				user: action.user,
				loggedIn: true
			};
		case SUCCESS_LOGIN_ACTION:
			return {
				...state,
				user: action.user,
				loggedIn: true
			};
	  default:
	    return state;
  }
}
