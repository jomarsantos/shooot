import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'

class JoinShoootScreen extends Component {
	joinPressed() {
		console.log('joining');
	}

	hostPressed() {
		console.log('hosting');
	}

	render() {
		return (
			<View>
				<Text>JoinShooot</Text>
			</View>
		)
	}
}

JoinShoootScreen.navigationOptions = {
  title: 'Join Shooot',
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

export default connect(null, null)(JoinShoootScreen);
