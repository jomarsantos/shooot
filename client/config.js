var env = 'dev';
// var env = 'prod';

var config = {
	auth: {
		google: {
			ios: '420629745647-6mu24t3op6co7epm7p8k2okglspgbqk4.apps.googleusercontent.com',
			android: '420629745647-1e9482gbet5k46sra3eoie23tojrrhme.apps.googleusercontent.com'
		},
		facebook: {
			appId: '2026817294249124'
		}
	}
}

if (env === 'dev') {
	config.baseUrl = 'http://192.168.1.107:3000'
} else {
	config.baseUrl = 'http://shooot.founded';
}

module.exports = config;
