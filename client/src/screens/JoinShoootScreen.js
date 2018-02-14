import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	TextInput
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { initializeSocket } from '../actions/GeneralActions'
import { joinShooot, updateSessionCodeInput } from '../actions/ParticipantActions'

class JoinShoootScreen extends Component {
	constructor(props) {
		super(props);
		this.props.initializeSocket();
	}


	componentWillReceiveProps(nextProps) {
		// TODO: loading screen until socket is initialized
	}

	joinShoot() {
		// TODO: remove stub / replace with user info
		let participant = {
			id: 12345,
			username: 'cecilia.federizon'
		}

		this.props.joinShooot(this.props.socket, participant, this.props.sessionCodeInput);

		// TODO: show "requesting to join" loading screen and handle if user is denied
	}

	render() {
		return (
			<View>
				<View>
					<Text>Enter shooot code:</Text>
					<TextInput
						onSubmitEditing={() => this.joinShoot()}
		        onChangeText={(text) => this.props.updateSessionCodeInput(text)}
		        value={this.props.sessionCodeInput}
		      />
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
		sessionCodeInput: state.participant.sessionCodeInput,
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
		updateSessionCodeInput: (text) => {
			dispatch(updateSessionCodeInput(text));
		},
		joinShooot: (socket, participant, sessionCodeInput) => {
			dispatch(joinShooot(socket, participant, sessionCodeInput));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinShoootScreen);
