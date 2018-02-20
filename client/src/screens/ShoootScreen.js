import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { acceptCameraPermissions } from '../actions/GeneralActions'
import { Camera, Permissions } from 'expo';

class ShoootScreen extends Component {
	async componentDidMount() {
		const { status } = await Expo.Permissions.askAsync(Permissions.CAMERA);
		if (status == 'granted') {
			this.props.acceptCameraPermissions();
		};
  }

	render() {
		let main = (
			<View></View>
		);

		if (this.props.hasCameraPermission) {
			main = (
				<View style={{ flex: 1 }}>
					<Camera style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>

            </View>
          </Camera>
				</View>
			);
		}

		return (
			main
		)
	}
}

ShoootScreen.navigationOptions = {
  title: 'Shooot',
	header: null,
};

function mapStateToProps(state) {
	return {
		user: state.user.user,
		hasCameraPermission: state.user.hasCameraPermission,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		navigate: (routeName) => {
			dispatch(navigate(routeName));
		},
		acceptCameraPermissions: () => {
			dispatch(acceptCameraPermissions());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoootScreen);
