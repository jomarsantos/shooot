import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	StyleSheet,
	StatusBar,
	View,
	Text,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { initializeSocket } from '../actions/GeneralActions'
import { createSession, declineParticipant } from '../actions/HostActions'

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
			if (!participant.hasOwnProperty('status')) {
				return (
					<View key={participant.id} style={styles.participantCell}>
						<View>
							<Text style={styles.participantText}>{participant.name}</Text>
						</View>
						<TouchableHighlight
							onPress={() => {this.props.declineParticipant(participant.id)}}
						>
							<Text>DELETE</Text>
						</TouchableHighlight>
					</View>
				);
			}
		});

		return (
			<View style={styles.main}>
				<StatusBar hidden={true} />
				<View style={styles.participants}>
					<Text style={styles.text}>Waiting for participants...</Text>
					<View style={styles.participantsList}>
						{participants}
					</View>
				</View>
				
				<View style={styles.code}>
					<Text style={styles.text}>Shareable shooot code:</Text>
					<Text style={styles.codeText}>{this.props.session.code}</Text>
				</View>
				
				<View style={styles.bottomBar}>
					<TouchableHighlight
						style={styles.nextButton}
						onPress={() => {this.props.navigate('RearrangeParticipants')}}>
						<Text style={styles.nextText}>NEXT</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: '#000000',
  },
	text: {
		color: '#EDB106'
	},
	participants: {
		flex: 4,
		paddingTop: 40,
		paddingLeft: 20,
		paddingRight: 20,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
	},
	participantsList: {
		paddingTop: 10,
		flex: 1,
		alignSelf: 'stretch',
	},
	participantCell: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 10,
		borderRadius: 20,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#EDB106',
	},
	participantText: {
		color: '#000000'
	},
	code: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	codeText: {
		fontSize: 30,
		color: '#EDB106'
	},
	bottomBar: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	nextText: {
		color: '#000000'
	},
	nextButton: {
		paddingTop: 10,
    paddingBottom: 10,
		paddingLeft: 40,
		paddingRight: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#EDB106',
		borderRadius: 20,
	}
});

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
		},
		declineParticipant: (participantId) => {
			dispatch(declineParticipant(participantId));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSessionScreen);
