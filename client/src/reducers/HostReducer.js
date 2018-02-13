import { SHOOOT_CREATED_HOST_ACTION, NEW_POSSIBLE_PARTICIPANT_HOST_ACTION } from '../actions/HostActions';

const INITIAL_STATE = {
	sessionCreated: 0,
	participants: []
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
	  case SHOOOT_CREATED_HOST_ACTION:
	  	return {
				...state,
				sessionCreated: 1,
			};
		case NEW_POSSIBLE_PARTICIPANT_HOST_ACTION:

			return {
				...state,
				sessionCreated: [...state.participants, action.participant],
			};
	  default:
	    return state;
  }
}
