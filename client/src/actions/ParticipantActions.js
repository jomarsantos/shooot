import io from 'socket.io-client';
export const UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION = 'UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION';
export const START_SESSION_PARTICIPANT_ACTION = 'START_SESSION_PARTICIPANT_ACTION';
export const SET_SESSION_PARTICIPANT_ACTION = 'SET_SESSION_PARTICIPANT_ACTION';

export function joinSession(user, socket, sessionCodeInput) {
	let joinSessionPromise = (reqSocket, reqArgs) => new Promise(resolve => {
		// TODO: add safety for unavailable server/broken socket
		reqSocket.emit('joinSession', reqArgs, function(response) {
			resolve(response);
		})
	});

	return (dispatch, getState) => {
		let args = {
			code: sessionCodeInput,
			participant: user,
		}
		return joinSessionPromise(socket, args).then((response) => {
			console.log("[INFO] Participant joined session - response from server", response);
			
			// TODO: validate response / show error if unable to join
			
			dispatch({
				type: SET_SESSION_PARTICIPANT_ACTION,
				session: response.session
			});
			
			socket.on('startSession', (message) => {
				console.log("[INFO] Participant told to start session by host");
				
				// TODO: dispatch message.participants to know ordering
				
				dispatch({
					type: START_SESSION_PARTICIPANT_ACTION,
				});
			});
			
		});
	}
}

export function updateSessionCodeInput(text) {
	return {
		type: UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION,
		sessionCodeInput: text
	};
}
