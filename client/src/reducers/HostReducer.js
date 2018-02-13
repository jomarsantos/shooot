import { SHOOOT_CREATED_HOST_ACTION, TEST } from '../actions/HostActions';

const INITIAL_STATE = {
	sessionCreated: 0,
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
	  case SHOOOT_CREATED_HOST_ACTION:
	  	return {
				...state,
				sessionCreated: 1,
			};
	  default:
	    return state;
  }
}
