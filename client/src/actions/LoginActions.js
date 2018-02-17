import config from '../../config'
export const SUCCESS_LOGIN_ACTION = 'SUCCESS_LOGIN_ACTION';

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
				console.log(response)
			},
			error => {
				console.log('An error occured.', error);
			}
		);
	}
}

export function loggedIn(userDetails) {
  return {
    type: SUCCESS_LOGIN_ACTION,
		userDetails: userDetails
  };
}
