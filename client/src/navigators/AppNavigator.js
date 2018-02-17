import React, { Component, PropTypes } from 'react';
import { BackAndroid, Alert } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import JoinShoootScreen from '../screens/JoinShoootScreen';
import HostShoootScreen from '../screens/HostShoootScreen';
import RearrangeParticipantsScreen from '../screens/RearrangeParticipantsScreen';
import ShoootScreen from '../screens/ShoootScreen';

export const AppNavigator = StackNavigator({
		Login: {
			screen: LoginScreen
		},
		Home: {
			screen: HomeScreen
		},
		JoinShooot: {
			screen: JoinShoootScreen
		},
		HostShooot: {
			screen: HostShoootScreen
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
