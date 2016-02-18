'use strict';

import React, {
	View,
	Component,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";

export default class ProfilePage extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.main} automaticallyAdjustsScrollViewInsets={true}>
				<Image source={{uri: "http://www.manojnama.com/img/DP.jpg"}} 
				 	style={styles.profilePic} />
				<Text style={styles.centering}>This is profile page</Text>
			</View>
		);
	}
};

var styles = StyleSheet.create({
	main: {
		alignItems: "center",
		flex: 1,
		paddingTop: 65,
	},
	centering: {
		alignItems: "center",
		justifyContent: "center",
	},
	profilePic: {
		width: 200,
		marginTop: 20,
		borderRadius: 100,
		height: 200,
	}
});