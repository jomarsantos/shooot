import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { startSession } from '../actions/HostActions'

class HostSessionScreen extends Component {
	render() {
		let participants = this.props.participants.map((participant, index) => {
			if (!participant.hasOwnProperty('status')) {
				return (
					<View key={participant.id}>
							<Text>{participant.name}</Text>
					</View>
				);
			}
		});

		return (
			<View>
				<Text>Rearrange Participants</Text>
				{participants}
				<TouchableHighlight
					onPress={() => this.props.startSession(this.props.session, this.props.participants, this.props.socket)}
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
		startSession: (session, participants, socket) => {
			dispatch(startSession(session, participants, socket));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSessionScreen);
