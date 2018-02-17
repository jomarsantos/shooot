import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	Image,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { initializeApp } from '../actions/GeneralActions'

class AppInitialization extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		)
	}
}

AppInitialization.navigationOptions = {
  title: 'App Initialization',
	header: null,
};

function mapStateToProps(state) {
	return {
		appInitialized: state.general.appInitialized
	};
}

function mapDispatchToProps(dispatch) {
	return {
		initializeApp: () => {
			dispatch(initializeApp());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInitialization);
