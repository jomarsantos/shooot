import io from 'socket.io-client';
export const SESSION_CREATED_HOST_ACTION = 'SESSION_CREATED_HOST_ACTION';
export const NEW_POSSIBLE_PARTICIPANT_HOST_ACTION = 'NEW_POSSIBLE_PARTICIPANT_HOST_ACTION';

export function createSession(user, socket) {
	let createSessionPromise = (reqSocket, reqArgs) => new Promise(resolve => {
		// TODO: add safety for unavailable server/broken socket
		reqSocket.emit('createSession', reqArgs, function(response) {
			resolve(response);
		})
	});

	return (dispatch, getState) => {
		return createSessionPromise(socket, {userId: user.id}).then((response) => {
			console.log("RESPONSE FROM SERVER", response);

			// TODO: validate response

			socket.on(response.session.code, (message) => {
				switch(message.type) {
					case 'addNewPossibleParticipant':
						dispatch({
							type: NEW_POSSIBLE_PARTICIPANT_HOST_ACTION,
							participant: message.participant
						});
				}
			});

			dispatch(sessionCreated(response));
		});
	}
}

export function sessionCreated(response) {
	return {
		type: SESSION_CREATED_HOST_ACTION,
		session: response.session
	}
}
