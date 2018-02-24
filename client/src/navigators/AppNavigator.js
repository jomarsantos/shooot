import React, { Component, PropTypes } from 'react';
import { BackAndroid, Alert } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import AppInitializationScreen from '../screens/AppInitializationScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import JoinSessionScreen from '../screens/JoinSessionScreen';
import HostSessionScreen from '../screens/HostSessionScreen';
import RearrangeParticipantsScreen from '../screens/RearrangeParticipantsScreen';
import ShoootScreen from '../screens/ShoootScreen';

export const AppNavigator = StackNavigator({
		AppInitialization: {
			screen: AppInitializationScreen
		},
		Login: {
			screen: LoginScreen
		},
		Home: {
			screen: HomeScreen
		},
		JoinSession: {
			screen: JoinSessionScreen
		},
		HostSession: {
			screen: HostSessionScreen
		},
		RearrangeParticipants: {
			screen: RearrangeParticipantsScreen
		},
		Shooot: {
			screen: ShoootScreen
		}
	}
);

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let addListener = createReduxBoundAddListener("app");
		return (
			<AppNavigator navigation={
				addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.navigation,
					addListener
				})
			}/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
		navigation: state.navigation
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
		dispatch: dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
