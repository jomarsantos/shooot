import { UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION } from '../actions/ParticipantActions';

const INITIAL_STATE = {
	sessionJoined: 0,
	sessionCodeInput: ''
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
		case UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION:
			return {
				...state,
				sessionCodeInput: action.sessionCodeInput,
			};
	  default:
	    return state;
  }
}
