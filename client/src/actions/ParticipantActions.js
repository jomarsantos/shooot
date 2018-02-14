import io from 'socket.io-client';
export const UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION = 'UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION';

export function joinShooot(socket, participant, sessionCodeInput) {
	let joinShoootPromise = (reqSocket, reqArgs) => new Promise(resolve => {
		// TODO: add safety for unavailable server/broken socket
		reqSocket.emit('joinShooot', reqArgs, function(response) {
			resolve(response);
		})
	});

	return (dispatch, getState) => {
		// NOTE: temporary stub here for testing
		let args = {
			code: sessionCodeInput,
			participant: participant
		}
		return joinShoootPromise(socket, args).then((response) => {
			console.log("RESPONSE FROM SERVER", response);

			// TODO: validate response / show error if unable to join
		});
	}
}

export function updateSessionCodeInput(text) {
	return {
		type: UPDATE_SESSION_CODE_INPUT_PARTICIPANT_ACTION,
		sessionCodeInput: text
	};
}
