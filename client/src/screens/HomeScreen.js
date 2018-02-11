import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	Image,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'

class HomeScreen extends Component {
	render() {
		return (
			<View>
				<View>
					<Image
	          source={require('../../assets/images/logo.png')}
	        />
				</View>

				<View>
						<TouchableHighlight
							onPress={() => {this.props.navigate('JoinShooot')}}
						>
							<Text>JOIN</Text>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => {this.props.navigate('HostShooot')}}
						>
							<Text>HOST</Text>
						</TouchableHighlight>
				</View>
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
	return {
		navigate: (routeName) => {
			dispatch(navigate(routeName));
		}
	}
}

export default connect(null, mapDispatchToProps)(HomeScreen);
