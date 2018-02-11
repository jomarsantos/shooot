import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import reducer from './src/reducers'

import AppNavigator from './src/navigators/AppNavigator'

function configureStore(initialState) {
	const navigationMiddleware = createReactNavigationReduxMiddleware(
	  "app",
	  state => state.navigation,
	)

	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			navigationMiddleware
		)
	);
	return createStore(reducer, initialState, enhancer)
}

const store = configureStore({});

const App = () => (
	<Provider store={ store }>
		<AppNavigator />
	</Provider>
)

export default App;
