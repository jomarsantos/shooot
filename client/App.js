import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
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

  const store = createStore(reducer, initialState, enhancer);

	store.subscribe(() => {
		AsyncStorage.setItem('user', JSON.stringify(store.getState().user));
	});

	return store;
}

const store = configureStore({});

const App = () => (
	<Provider store={ store }>
		<AppNavigator />
	</Provider>
)

export default App;
