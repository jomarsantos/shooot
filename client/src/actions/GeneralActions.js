import io from 'socket.io-client';
export const INITIALIZE_SOCKET_GENERAL_ACTION = 'INITIALIZE_SOCKET_GENERAL_ACTION';

export function initializeSocket() {
	return (dispatch, getState) => {
		var socket = io('http://192.168.1.107:3000', {
		  transports: ['websocket']
		});

		dispatch({
			type: INITIALIZE_SOCKET_GENERAL_ACTION,
			socket: socket,
		});
	}
}
