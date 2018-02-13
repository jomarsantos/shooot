import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { initializeSocket } from '../actions/GeneralActions'
import { createShooot } from '../actions/HostActions'

class HostShoootScreen extends Component {
	constructor(props) {
		super(props);
		this.props.initializeSocket();
		console.log('constructor');
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.socketStatus === 1 && nextProps.sessionCreated === 0) {
			this.props.createShooot(nextProps.socket);
		}
	}

	render() {
		console.log('render');
		return (
			<View>
				<View>
					<Text>{this.props.test}</Text>
					<Text>Waiting for participants...</Text>
					<View>
						<View>
							<Text>cecilia.federizon</Text>
						</View>
						<View>
							<Text>rherbosa</Text>
						</View>
					</View>
				</View>
				<View>
					<Text>Shareable shooot code:</Text>
					<Text>{this.props.session.code}</Text>
				</View>
			</View>
		)
	}
}

HostShoootScreen.navigationOptions = {
  title: 'Host Shooot',
	header: null,
};

function mapStateToProps(state) {
	return {
		socketStatus: state.general.socketStatus,
		socket: state.general.socket,
		session: state.general.session,
		sessionCreated: state.host.sessionCreated
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
		createShooot: (socket) => {
			dispatch(createShooot(socket));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HostShoootScreen);
