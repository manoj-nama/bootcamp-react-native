'use strict';

import React, {
	Component,
	Text,
	StyleSheet,
	View,
} from 'react-native';

export default class DetailPage extends Component {

	componentWillMount() {
		console.log(this.props.route.params);
		this.setState({params: this.props.route.params});	
	}

	render() {
		var dt = new Date(this.state.params.scheduleTime).toDateString();
		return (
			<View style={styles.container}>
				<View style={styles.titleCont}>
					<Text style={styles.title}>{this.state.params.title}</Text>
				</View>
				<Text style={styles.desc}>{this.state.params.description}</Text>
				<View style={styles.dateLabel}>
					<Text style={styles.dateTxt}>{dt}</Text>
				</View>
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
		textAlign: "center",
		fontWeight: "200",
		paddingVertical: 20,
	},
	titleCont: {
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	desc: {
		fontSize: 16,
		fontWeight: "200",
		textAlign: "center",
		padding: 10,
		color: "#666",
	},
	dateLabel: {
		margin: 10,
		padding: 10,
		backgroundColor: "#282",
		borderRadius: 5,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.3,
		shadowRadius: 3,
	},
	dateTxt: {
		textAlign: "center",
		fontWeight: "400",
		color: "#fff",
		fontSize: 16,
	}
});