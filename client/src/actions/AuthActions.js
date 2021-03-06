import config from '../../config'
export const SUCCESS_AUTH_ACTION = 'SUCCESS_AUTH_ACTION';
export const LOGOUT_AUTH_ACTION = 'LOGOUT_AUTH_ACTION';

export function fbLogin() {
  return function (dispatch) {
    return Expo.Facebook.logInWithReadPermissionsAsync(
			config.auth.facebook.appId,

		).then(
			response => {
				if (response.type === 'cancel') {
					return;
				}
				fetch(config.baseUrl + '/api/login/fb', {
	        method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
	          accessToken: response.token
	        })
	      }).then(
        	response => response.json(),
	        error => console.log('An error occured.', error)
	      ).then(json => {
					if (!json.success) {
						// TODO: show alert that login was not successful
						return;
					}
	        dispatch(loggedIn(json.user))
				})
			},
			error => {
				console.log('An error occured.', error);
			}
		);
	}
}

export function googleLogin() {
  return function (dispatch) {
    return Expo.Google.logInAsync({
			androidClientId: config.auth.google.android,
			iosClientId: config.auth.google.ios,
			scopes: ['profile', 'email'],
		}).then(
			response => {
				if (response.type === 'cancel') {
					return;
				}
				fetch(config.baseUrl + '/api/login/google', {
	        method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
	          accessToken: response.accessToken
	        })
	      }).then(
        	response => response.json(),
	        error => console.log('An error occured.', error)
	      ).then(json => {
					if (!json.success) {
						// TODO: show alert that login was not successful
						return;
					}
	        dispatch(loggedIn(json.user))
				})
			},
			error => {
				console.log('An error occured.', error);
			}
		);
	}
}

export function loggedIn(user) {
  return {
    type: SUCCESS_AUTH_ACTION,
		user: user
  };
}

export function logout() {
  return {
    type: LOGOUT_AUTH_ACTION,
  };
}
