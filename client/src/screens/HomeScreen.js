import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	Image,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { logout } from '../actions/AuthActions'

class HomeScreen extends Component {
	render() {
		return (
			<View>
				<View>
					<Image
	          source={require('../../assets/images/logo.png')}
	        />
				</View>

				<View>
						<TouchableHighlight
							onPress={() => {this.props.navigate('JoinSession')}}
						>
							<Text>JOIN</Text>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => {this.props.navigate('HostSession')}}
						>
							<Text>HOST</Text>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => {this.props.logout()}}
						>
							<Text>LOGOUT</Text>
						</TouchableHighlight>
				</View>
			</View>
		)
	}
}

HomeScreen.navigationOptions = {
  title: 'Home',
	header: null,
};

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		navigate: (routeName) => {
			dispatch(navigate(routeName));
		},
		logout: () => {
			dispatch(logout());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
