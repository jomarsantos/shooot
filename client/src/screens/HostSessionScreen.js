import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { initializeSocket } from '../actions/GeneralActions'
import { createSession } from '../actions/HostActions'

class HostSessionScreen extends Component {
	constructor(props) {
		super(props);
		this.props.initializeSocket();
	}

	componentWillReceiveProps(nextProps) {
		// Once socket is initialized, create a session
		if (nextProps.socketStatus === 1 && nextProps.sessionCreated === 0) {
			this.props.createSession(this.props.user, nextProps.socket);
		}
	}

	render() {
		let participants = this.props.participants.map((participant, index) => {
			return (
				<View key={participant.id}>
					<Text>{participant.name}</Text>
				</View>
			);
		});

		return (
			<View>
				<View>
					<Text>{this.props.test}</Text>
					<Text>Waiting for participants...</Text>
					<View>
						{participants}
					</View>
				</View>
				<View>
					<Text>Shareable shooot code:</Text>
					<Text>{this.props.session.code}</Text>
				</View>
				<TouchableHighlight
					onPress={() => {this.props.navigate('RearrangeParticipants')}}
				>
					<Text>Next</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

HostSessionScreen.navigationOptions = {
  title: 'Host Shooot',
	header: null,
};

function mapStateToProps(state) {
	return {
		user: state.user.user,
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
		},
		initializeSocket: () => {
			dispatch(initializeSocket());
		},
		createSession: (user, socket) => {
			dispatch(createSession(user, socket));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSessionScreen);
