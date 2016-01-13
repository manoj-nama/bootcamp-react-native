'use strict';

import React, {
	Component,
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	ActivityIndicatorIOS,
	ListView,
} from 'react-native';
import DetailPage from "./detail";

export default class DashboardPage extends Component {

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			loadingData: true,
			dataSource: ds.cloneWithRows([])
		};
	}

	componentWillMount() {
		fetch("http://api.manojnama.com/v1/api/sessions")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(data.sessions),
					loadingData: false,
				});
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	goToDetailPage(data) {
		this.props.navigator.push({ 
			name: "Agenda",
			component: DetailPage,
			params: data,
		});
	}

	_renderRow(rowData) {
		var dt = new Date(rowData.scheduleTime).toDateString();
		return (
			<TouchableOpacity style={styles.listItem} 
				key={rowData._id}
				onPress={() => this.goToDetailPage(rowData)}>
				<View>
					<View style={styles.info}>
						<Text style={styles.title}>{rowData.title}</Text>
						<Text style={styles.desc}>{rowData.description}</Text>
					</View>
					<View style={styles.time}>
						<Text>{dt}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.nav} automaticallyAdjustsScrollViewInsets={true}>
				<ListView style={styles.list}
					contentContainerStyle={styles.container}
					pageSize={5}
					automaticallyAdjustContentInsets={true}
			    	dataSource={this.state.dataSource}
			    	renderRow={this._renderRow.bind(this)} />

			   {
			   	this.state.loadingData ?
			   	<View style={styles.loader}>
		    			<ActivityIndicatorIOS style={[styles.centering, {height: 50}]} />
		    		</View> : null
		    	}
			</View>
		);
	}
};

const styles = StyleSheet.create({
	nav: {
		flex: 1,
		backgroundColor: "#eee",
	},
	list: {
		paddingTop: 65,
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	listItem: {
		marginTop: 10,
		marginHorizontal: 10,
		// shadowOffset: {width: 0, height: 2},
		// shadowOpacity: 0.15,
		// shadowRadius: 2,
		borderRadius: 5,
		alignSelf: "stretch",
		// backgroundColor: "#fff",
	},
	loader: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255, 255, 255, 0.2)",
	},
	title: {
		fontSize: 16,
	},
	desc: {
		color: "#555",
		paddingVertical: 3,
		fontWeight: "200",
		fontSize: 13,
		fontStyle: "italic",
	},
	info: {
		padding: 10,
		backgroundColor: "#fff",
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
	},
	time: {
		backgroundColor: "#d5d5d5",
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
	},
});