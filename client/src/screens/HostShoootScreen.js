import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'

class HostShoootScreen extends Component {
	joinPressed() {
		console.log('joining');
	}

	hostPressed() {
		console.log('hosting');
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
	navigate: (routeName) => {
		dispatch(navigate(routeName));
	}
}

export default connect(null, null)(HostShoootScreen);
