import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	Image,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { fbLogin, googleLogin } from '../actions/LoginActions'

class HomeScreen extends Component {
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

HomeScreen.navigationOptions = {
  title: 'Login',
	header: null,
};

function mapStateToProps(state) {
	return {};
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

export default connect(null, mapDispatchToProps)(HomeScreen);
