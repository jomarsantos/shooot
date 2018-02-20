import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	Image,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { fbLogin, googleLogin } from '../actions/AuthActions'

class LoginScreen extends Component {
	render() {
		return (
			<View>
				<View>
					<Image
	          source={require('../../assets/images/logo.png')}
	        />
				</View>
				<Text>LOGIN</Text>

				<View>
						<TouchableHighlight
							onPress={() => {this.props.fbLogin()}}
						>
							<Text>Facebook Login</Text>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => {this.props.googleLogin()}}
						>
							<Text>Google Login</Text>
						</TouchableHighlight>
				</View>
			</View>
		)
	}
}

LoginScreen.navigationOptions = {
  title: 'Login',
	header: null,
};

function mapStateToProps(state) {
	return {
		appInitialized: state.general.appInitialized
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fbLogin: () => {
			dispatch(fbLogin());
		},
		googleLogin: () => {
			dispatch(googleLogin());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
