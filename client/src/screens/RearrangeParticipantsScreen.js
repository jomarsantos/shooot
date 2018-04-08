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
import { startSession } from '../actions/HostActions'

class HostSessionScreen extends Component {
	render() {
		let participants = this.props.participants.map((participant, index) => {
			if (!participant.hasOwnProperty('status')) {
				return (
					<View key={participant.id} style={styles.participantCell}>
							<Text style={styles.participantText}>{participant.name}</Text>
					</View>
				);
			}
		});

		return (
			<View style={styles.main}>
				<StatusBar hidden={true} />
				<View style={styles.participants}>
					<Text style={styles.text}>Rearrange Participants</Text>
					<View style={styles.participantsList}>
						{participants}
					</View>
				</View>
				
				<View style={styles.bottomBar}>
					<TouchableHighlight
						style={styles.nextButton}
						onPress={() => this.props.startSession(this.props.session, this.props.participants, this.props.socket)}>
						<Text style={styles.nextText}>START</Text>
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
