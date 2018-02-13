import io from 'socket.io-client';
export const SHOOOT_CREATED_HOST_ACTION = 'SHOOOT_CREATED_HOST_ACTION';
export const NEW_POSSIBLE_PARTICIPANT_HOST_ACTION = 'NEW_POSSIBLE_PARTICIPANT_HOST_ACTION';

export function createShooot(socket) {
	let createShoootPromise = (reqSocket, reqArgs) => new Promise(resolve => {
		// TODO: add safety for unavailable server/broken socket
		reqSocket.emit('createShooot', reqArgs, function(response) {
			resolve(response);
		})
	});

	return (dispatch, getState) => {
		return createShoootPromise(socket, {}).then((response) => {
			console.log("RESPONSE FROM SERVER", response);

			// TODO: validate response

			socket.on(response.code, (message) => {
				switch(message.type) {
					case 'addNewPossibleParticipant':
						dispatch({
							type: NEW_POSSIBLE_PARTICIPANT_HOST_ACTION,
							participant: message.participant
						});
				}
			});

			dispatch(shoootCreated(response));
		});
	}
}

export function shoootCreated(response) {
	return {
		type: SHOOOT_CREATED_HOST_ACTION,
		session: response.session
	}
}
