import io from 'socket.io-client';
export const SESSION_CREATED_HOST_ACTION = 'SESSION_CREATED_HOST_ACTION';
export const NEW_POSSIBLE_PARTICIPANT_HOST_ACTION = 'NEW_POSSIBLE_PARTICIPANT_HOST_ACTION';
export const UPDATE_PARTICIPANTS_HOST_ACTION = 'UPDATE_PARTICIPANTS_HOST_ACTION';
export const START_SESSION_HOST_ACTION = 'START_SESSION_HOST_ACTION';

export function createSession(user, socket) {
	let createSessionPromise = (reqSocket, reqArgs) => new Promise(resolve => {
		// TODO: add safety for unavailable server/broken socket
		reqSocket.emit('createSession', reqArgs, function(response) {
			resolve(response);
		})
	});

	return (dispatch, getState) => {
		return createSessionPromise(socket, {userId: user.id}).then((response) => {
			console.log("[INFO] Host created session - response from server", response);

			// TODO: validate response

			socket.on('addNewPossibleParticipant', (message) => {
				console.log("[INFO] Host receiving new participant request - request from server", message.participant);
				dispatch({
					type: NEW_POSSIBLE_PARTICIPANT_HOST_ACTION,
					participant: message.participant
				});
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

export function declineParticipant(participantId) {
	return (dispatch, getState) => {
		const state = getState();

		// Make a deep copy of the participants
	 	let participants = JSON.parse(JSON.stringify(state.host.participants));
		let updatedParticipants = participants.map((participant, index) => {
			if (participant.id === participantId) {
				participant.status = 'declined';
				return participant;
			} else {
				return participant;
			}
		});

		dispatch(updateParticipants(updatedParticipants));
	}
}

export function updateParticipants(participants) {
	return {
		type: UPDATE_PARTICIPANTS_HOST_ACTION,
		participants: participants
	}
}

export function startSession(session, participants, socket) {
	let startSessionPromise = (reqSocket, reqArgs) => new Promise(resolve => {
		// TODO: add safety for unavailable server/broken socket
		reqSocket.emit('startSession', reqArgs, function(response) {
			resolve(response);
		})
	});
	
	let args = {
		code: session.code,
		participants: participants
	}
	
	return (dispatch, getState) => {
		return startSessionPromise(socket, args).then((response) => {
			console.log("[INFO] Host starting session - response from server", response);
			
			dispatch({
				type: START_SESSION_HOST_ACTION,
			});
		});
	}
}

