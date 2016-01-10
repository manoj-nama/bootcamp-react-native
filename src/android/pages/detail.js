'use strict';

import React, {
	Component,
	Text,
	StyleSheet,
	View,
} from 'react-native';

export default class DetailPage extends Component {

	componentWillMount() {
		this.setState({params: this.props.route.params});	
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.state.params.title}</Text>
				<Text style={styles.desc}>{this.state.params.desc}</Text>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 64,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		padding: 10,
	},
	desc: {
		fontSize: 16,
		padding: 10,
		color: "#666",
	}
});