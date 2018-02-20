import {
	INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION,
	ACCEPT_CAMERA_PERMISSIONS_GENERAL_ACTION
} from '../actions/GeneralActions';
import { SUCCESS_AUTH_ACTION, LOGOUT_AUTH_ACTION } from '../actions/AuthActions';

const INITIAL_STATE = {
	user: {},
	loggedIn: false,
	hasCameraPermission: false
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
		case INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION:
			return {
				...state,
				user: action.userDataAsyncStorage.user,
				loggedIn: true
			};
		case SUCCESS_AUTH_ACTION:
			return {
				...state,
				user: action.user,
				loggedIn: true
			};
		case LOGOUT_AUTH_ACTION:
			return {
				...state,
				user: {},
				loggedIn: false
			};
		case ACCEPT_CAMERA_PERMISSIONS_GENERAL_ACTION:
			return {
				...state,
				hasCameraPermission: true
			};
	  default:
	    return state;
  }
}
