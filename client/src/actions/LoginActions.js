import config from '../../config'

export function fbLogin() {
  return function (dispatch) {
    return Expo.Facebook.logInWithReadPermissionsAsync(
			config.auth.facebook.appId
		).then(
			response => {
				console.log(response)
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
