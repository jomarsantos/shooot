import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'

class HomeScreen extends Component {
	render() {
		return (
			<View>
				<Text>
					Home
				</Text>
			</View>
		)
	}
}

HomeScreen.navigationOptions = {
  title: 'Home',
	header: null,
};

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
}

export default connect(null, null)(HomeScreen);
