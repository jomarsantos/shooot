import { INITIALIZE_SOCKET_GENERAL_ACTION } from '../actions/GeneralActions';
import { SHOOOT_CREATED_HOST_ACTION } from '../actions/HostActions';

const INITIAL_STATE = {
	socketStatus: 0,
	socket: {},
	session: {}
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
	  case INITIALIZE_SOCKET_GENERAL_ACTION:
	  	return {
				...state,
				socketStatus: 1,
				socket: action.socket
			};
		case SHOOOT_CREATED_HOST_ACTION:
			return {
				...state,
				session: action.session
			};
	  default:
	    return state;
  }
}
