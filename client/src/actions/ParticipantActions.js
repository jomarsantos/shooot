import io from 'socket.io-client';
export const SHOOOT_CREATED_HOST_ACTION = 'SHOOOT_CREATED_HOST_ACTION';
export const NEW_POSSIBLE_PARTICIPANT_HOST_ACTION = 'NEW_POSSIBLE_PARTICIPANT_HOST_ACTION';

export function joinShooot(socket) {
	let joinShoootPromise = (reqSocket, reqArgs) => new Promise(resolve => {
		// TODO: add safety for unavailable server/broken socket
		reqSocket.emit('joinShooot', reqArgs, function(response) {
			resolve(response);
		})
	});

	return (dispatch, getState) => {
		// NOTE: temporary stub here for testing
		let args = {
			code: 'Y6R9',
			participant: {
				id: 12345,
				username: 'cecilia.federizon'
			}
		}
		return joinShoootPromise(socket, args).then((response) => {
			console.log("RESPONSE FROM SERVER", response);

			// TODO: validate response
		});
	}
}
