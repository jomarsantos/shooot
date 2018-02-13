import { INITIALIZE_SOCKET_GENERAL_ACTION } from '../actions/currentBrews';

const INITIAL_STATE = {
	socketStatus: 0,
	socket: {}
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
	  default:
	    return state;
  }
}
