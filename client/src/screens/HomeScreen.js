import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	StyleSheet,
	StatusBar,
	View,
	Text,
	Image,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { logout } from '../actions/AuthActions'


class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.main}>
				<StatusBar hidden={true} />

				<TouchableHighlight style={styles.logoutButton}
					onPress={() => {this.props.logout()}}>
					<Text style={styles.logoutText}>LOGOUT</Text>
				</TouchableHighlight>
				
				<View style={styles.logo}>
					<Image
						resizeMode='center'
	          source={require('../../assets/images/logo.png')}
	        />
				</View>

				<View style={styles.buttons}>
						<TouchableHighlight style={styles.joinButton}
							onPress={() => {this.props.navigate('JoinSession')}}>
							<Text style={styles.joinText}>JOIN</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.hostButton}
							onPress={() => {this.props.navigate('HostSession')}}>
							<Text style={styles.hostText}>HOST</Text>
						</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: '#000000',
  },
	logo: {
		marginBottom: 30,
  },
	buttons: {
	},
	joinButton: {
    paddingTop: 10,
    paddingBottom: 10,
		paddingLeft: 40,
		paddingRight: 40,
		marginBottom: 10,
    backgroundColor:'#EDB106',
		borderRadius: 20,
		justifyContent: 'center',
  },
	hostButton: {
		paddingTop: 10,
    paddingBottom: 10,
		paddingLeft: 40,
		paddingRight: 40,
		marginBottom: 10,
		backgroundColor:'#000000',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#EDB106',
		justifyContent: 'center',
	},
	logoutButton: {
		position: 'absolute',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		top: 0,
		right: 0,
	},
	joinText: {
		textAlign: 'center',
		color: '#000000'
	},
	hostText: {
		textAlign: 'center',
		color: '#EDB106'
	},
	logoutText: {
		textAlign: 'center',
		color: '#EDB106'
	}
});

HomeScreen.navigationOptions = {
  title: 'Home',
	header: null,
};

function mapStateToProps(state) {
	return {
	};
}

function mapDispatchToProps(dispatch) {
	return {
		navigate: (routeName) => {
			dispatch(navigate(routeName));
		},
		logout: () => {
			dispatch(logout());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
