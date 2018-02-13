import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { initializeSocket } from '../actions/GeneralActions'

class HostShoootScreen extends Component {
	constructor(props) {
		super(props);
		this.props.initializeSocket();
	}

	render() {
		return (
			<View>
				<View>
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
					<Text>Y6R8</Text>
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
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		navigate: (routeName) => {
			dispatch(navigate(routeName));
		},
		initializeSocket: () => {
			dispatch(initializeSocket());
		}
	}
}

export default connect(null, mapDispatchToProps)(HostShoootScreen);
