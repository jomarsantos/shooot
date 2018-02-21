import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	TouchableHighlight
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { acceptCameraPermissions } from '../actions/GeneralActions'
import { Camera, Permissions } from 'expo';

class ShoootScreen extends Component {
	constructor(props) {
		super(props);
		this.camera = {};
	}

	async componentDidMount() {
		const { status } = await Expo.Permissions.askAsync(Permissions.CAMERA);
		if (status == 'granted') {
			this.props.acceptCameraPermissions();
		};
  };

	async takePicture() {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync({
				base64: true,
				quality: 0.5
			});
			console.log(photo);
		} else {
			console.log('nerp');
		}
		// console.log(this.camera);
    // if (this.camera) {
    //   this.camera.takePictureAsync().then(data => {
    //     FileSystem.moveAsync({
    //       from: data.uri,
    //       to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
    //     }).then(() => {
    //       this.setState({
    //         photoId: this.state.photoId + 1,
    //       });
    //       Vibration.vibrate();
    //     });
    //   });
    // }
  };

	render() {
		let main = (
			<View></View>
		);

		if (this.props.hasCameraPermission) {
			main = (
				<View style={{ flex: 1 }}>
					<Camera style={{ flex: 5 }}
						ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>

            </View>
          </Camera>
					<View style={{ flex: 1 }}>
							<TouchableHighlight
								onPress={this.takePicture.bind(this)}
							>
								<Text>SHOOOT</Text>
							</TouchableHighlight>

					</View>
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
