import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { initializeSocket } from '../actions/GeneralActions'
import { joinShooot } from '../actions/ParticipantActions'

class JoinShoootScreen extends Component {
	constructor(props) {
		super(props);
		this.props.initializeSocket();
	}

	componentWillReceiveProps(nextProps) {
		// Once socket is initialized, create a session
		if (nextProps.socketStatus === 1 && nextProps.sessionJoined === 0) {
			this.props.joinShooot(nextProps.socket);
		}
	}

	render() {
		return (
			<View>
				<View>
					<Text>Searching for nearby hosts...</Text>
					<View>
						<View>
							<Text>jomars</Text>
						</View>
					</View>
				</View>
				<View>
					<Text>Or enter shooot code:</Text>
					<Text>_______</Text>
				</View>
			</View>
		)
	}
}

JoinShoootScreen.navigationOptions = {
  title: 'Join Shooot',
	header: null,
};

function mapStateToProps(state) {
	return {
		socketStatus: state.general.socketStatus,
		socket: state.general.socket,
		session: state.general.session,
		sessionJoined: state.participant.sessionJoined
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
		joinShooot: (socket) => {
			dispatch(joinShooot(socket));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinShoootScreen);
