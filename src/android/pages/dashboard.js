'use strict';

import React, {
	Component,
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	ListView,
} from 'react-native';
import DetailPage from "./detail";
var dummyData = require("../../dummyData.json");

export default class DashboardPage extends Component {

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(dummyData)
		};
	}

	goToDetailPage(data) {
		this.props.navigator.push({ 
			name: "Detail",
			component: DetailPage,
			params: data,
		});
	}

	_renderRow(rowData) {
		return (
			<TouchableHighlight style={styles.listItem} 
				underlayColor="rgba(255, 200, 0, 0.5)"
				onPress={() => this.goToDetailPage(rowData)}>
				<View>
					<Text style={styles.title}>{rowData.title}</Text>
					<Text style={styles.desc}>{rowData.desc}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<View style={styles.nav} automaticallyAdjustsScrollViewInsets={true}>
				<ListView style={styles.list}
					contentContainerStyle={styles.container}
					automaticallyAdjustContentInsets={true}
			    	dataSource={this.state.dataSource}
			    	renderRow={this._renderRow.bind(this)} />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	nav: {
		flex: 1,
		backgroundColor: "#fff",
	},
	list: {
		paddingTop: 65,
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	listItem: {
		padding: 10,
		marginTop: 10,
		marginHorizontal: 10,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.15,
		shadowRadius: 2,
		borderRadius: 0,
		elevation: 2,
		alignSelf: "stretch",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 16,
	},
	desc: {
		color: "#555",
		paddingVertical: 3,
		fontSize: 13,
		fontStyle: "italic",
	}
});