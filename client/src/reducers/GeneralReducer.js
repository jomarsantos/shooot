import {
	INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION,
	INITIALIZE_APP_NOT_LOGGED_IN_GENERAL_ACTION,
	INITIALIZE_SOCKET_GENERAL_ACTION
} from '../actions/GeneralActions';
import { SESSION_CREATED_HOST_ACTION } from '../actions/HostActions';

const INITIAL_STATE = {
	appInitialized: false,
	socketStatus: 0,
	socket: {},
	session: {}
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
		case INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION:
			return {
				...state,
				appInitialized: true,
			};
		case INITIALIZE_APP_NOT_LOGGED_IN_GENERAL_ACTION:
			return {
				...state,
				appInitialized: true,
			};
	  case INITIALIZE_SOCKET_GENERAL_ACTION:
	  	return {
				...state,
				socketStatus: 1,
				socket: action.socket
			};
		case SESSION_CREATED_HOST_ACTION:
			return {
				...state,
				session: action.session
			};
	  default:
	    return state;
  }
}
