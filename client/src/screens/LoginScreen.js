import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	Image,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { initializeApp } from '../actions/GeneralActions'
import { fbLogin, googleLogin } from '../actions/LoginActions'

class LoginScreen extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		let main = (
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
		);

		if (!this.props.appInitialized) {
			main = (
				<View>
					<Text>Loading</Text>
				</View>
			);
		}
		return (
			main
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
		initializeApp: () => {
			dispatch(initializeApp());
		},
		fbLogin: () => {
			dispatch(fbLogin());
		},
		googleLogin: () => {
			dispatch(googleLogin());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
