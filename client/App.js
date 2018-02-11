import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './app/reducers'


import AppNavigator from './app/navigators/AppNavigator'


function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware
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

AppRegistry.registerComponent('Shooot', () => App);
