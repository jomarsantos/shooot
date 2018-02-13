import io from 'socket.io-client';
export const INITIALIZE_SOCKET_GENERAL_ACTION = 'INITIALIZE_SOCKET_GENERAL_ACTION';

export function initializeSocket() {
	var socket = io('http://192.168.1.107:3000', {
	  transports: ['websocket']
	});

	return (dispatch, getState) => {
		dispatch({
			type: INITIALIZE_SOCKET_GENERAL_ACTION,
			socket: socket,
		});
	}
}
