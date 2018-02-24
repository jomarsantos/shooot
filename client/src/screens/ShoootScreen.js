import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	View,
	Text,
	TouchableHighlight,
	ImageEditor,
	Dimensions
} = ReactNative
import { connect } from 'react-redux'
import { navigate } from '../actions/NavigationActions'
import { acceptCameraPermissions } from '../actions/GeneralActions'
import { Camera, Permissions, ImageManipulator } from 'expo';

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

			const { height, width } = Dimensions.get('window');

			let resizeHeight = (height / width) * 1080;
			let originY = (resizeHeight - 1080) / 2;

			photo = await ImageManipulator.manipulate(
				photo.uri,
				[
					{
						resize: {
							width: 1080
						}
					},
					{
						crop: {
							originX: 0,
							originY: originY,
							width: 1080,
							height: 1080
						}
					}
				],
				{
					compress: 1,
					base64: true
				}
			);
			console.log(photo);
		}
  };

	render() {
		let main = (
			<View></View>
		);

		const { height, width } = Dimensions.get('window');
		let barHeight = (height - width) / 2;

		let ratio = '';
		if ((width/height) === (9/16)) {
			ratio = '16:9';
		}
		// TODO: handle other ratios

		if (this.props.hasCameraPermission) {
			main = (
					<Camera style={{ flex: 1 }}
						ratio={ratio}
						ref={ref => { this.camera = ref; }}>
						<View style={{ height: barHeight, width: width, backgroundColor: 'black'}}>
						</View>
						<View style={{ height: width, width: width}}>
						</View>
						<View style={{ height: barHeight, width: width, backgroundColor: 'black'}}>
							<TouchableHighlight
								onPress={this.takePicture.bind(this)}
							>
								<Text>SHOOOT</Text>
							</TouchableHighlight>
						</View>
          </Camera>
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
