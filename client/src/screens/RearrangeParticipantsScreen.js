import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'

class HostSessionScreen extends Component {
	render() {

		return (
			<View>
				<Text>Rearrange Participants</Text>
				<TouchableHighlight
					onPress={() => {this.props.navigate('Shooot')}}
				>
					<Text>Next</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

HostSessionScreen.navigationOptions = {
  title: 'Rearrange Participants',
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

export default connect(mapStateToProps, mapDispatchToProps)(HostSessionScreen);
