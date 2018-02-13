import io from 'socket.io-client';
export const SHOOOT_CREATED_HOST_ACTION = 'SHOOOT_CREATED_HOST_ACTION';

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
			var derp = socket;
			// console.log(socket);
			// socket.on('test', () => {
			// 	dispatch({
			// 		type: TEST,
			// 	});
			// });


			// TODO: validate response

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
