import io from 'socket.io-client';
import { AsyncStorage } from 'react-native'
export const INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION = 'INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION';
export const INITIALIZE_APP_NOT_LOGGED_IN_GENERAL_ACTION = 'INITIALIZE_APP_NOT_LOGGED_IN_GENERAL_ACTION';
export const INITIALIZE_SOCKET_GENERAL_ACTION = 'INITIALIZE_SOCKET_GENERAL_ACTION';

export function initializeApp() {
  return function (dispatch) {
    return AsyncStorage.getItem('user').then(
			function (userDataAsyncStorage) {
				userDataAsyncStorage = JSON.parse(userDataAsyncStorage);
				if (userDataAsyncStorage != null && userDataAsyncStorage.loggedIn) {
					dispatch({
						type: INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION,
						userDataAsyncStorage: userDataAsyncStorage
					});
				} else {
					dispatch({
						type: INITIALIZE_APP_NOT_LOGGED_IN_GENERAL_ACTION,
					});
				}
			}
		)
	}
}

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
