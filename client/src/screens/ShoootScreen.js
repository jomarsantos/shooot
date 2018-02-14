import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'

class HostShoootScreen extends Component {
	render() {

		return (
			<View>
				<Text>Shooot</Text>
			</View>
		)
	}
}

HostShoootScreen.navigationOptions = {
  title: 'Shooot',
	header: null,
};

function mapStateToProps(state) {
	return {
		socketStatus: state.general.socketStatus,
		socket: state.general.socket,
		session: state.general.session,
		sessionCreated: state.host.sessionCreated,
		participants: state.host.participants
	};
}

function mapDispatchToProps(dispatch) {
	return {
		navigate: (routeName) => {
			dispatch(navigate(routeName));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HostShoootScreen);
