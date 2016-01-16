'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TabBarIOS,
	Navigator,
	View,
} from 'react-native';

import DashboardPage from "./dashboard";

var enums = require("../../common/enums"),
	icons = require("../../common/icons");

export default class NavigationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: enums.Tabs.UPCOMING
		};
	}

	render() {
		const routeMapper = {
			LeftButton: (route, navigator, index, navState) => {
				if (index === 0) {
					return null;
				}
				const previousRoute = navState.routeStack[index - 1]
				return (
					<TouchableOpacity
						style={styles.backBtn}
						onPress={() => navigator.pop()}>
						<Text style={styles.navText}>
							&lt; Back
						</Text>
					</TouchableOpacity>
				);
			},
			RightButton: (route, navigator, index, navState) => {
				if (route.rightElement) {
					return route.rightElement;
				}
			},
			Title: (route, navigator, index, navState) => {
				return (
					<Text style={styles.navTitle}>{route.name}</Text>
				);
			}
		};
		
		return (
			<TabBarIOS tintColor="#fc0">

				<TabBarIOS.Item
					title={enums.Tabs.UPCOMING}
					icon={{uri: icons.upcoming.idle, scale: 3}}
					selectedIcon={{uri: icons.upcoming.active, scale: 3}}
					selected={this.state.selectedTab === enums.Tabs.UPCOMING}
					onPress={() => {
						this.setState({
							selectedTab: enums.Tabs.UPCOMING,
						});
					}}>

					<Navigator
						automaticallyAdjustsScrollViewInsets={true}
						navigationBar={
 						   <Navigator.NavigationBar style={styles.navBar} routeMapper={routeMapper} />
						}
						initialRoute={{name: enums.Tabs.UPCOMING, component: DashboardPage}}
						configureScene={() => {
						  return Navigator.SceneConfigs.PushFromRight;
						}}
						renderScene={(route, navigator) => {
							if (route.component) {
						   	return React.createElement(route.component, { navigator, route });
						  	}
					}} />

				</TabBarIOS.Item>

				<TabBarIOS.Item
					title={enums.Tabs.BOOTCAMP}
					icon={{uri: icons.bootcamp.idle, scale: 3}}
					selectedIcon={{uri: icons.bootcamp.active, scale: 3}}
					selected={this.state.selectedTab === enums.Tabs.BOOTCAMP}
					onPress={() => {
						this.setState({
							selectedTab: enums.Tabs.BOOTCAMP,
						});
					}}>
					<View style={styles.tab}>
						<Text style={styles.centering}>This is Bootcamp tab</Text>
					</View>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					title={enums.Tabs.CATEGORY}
					icon={{uri: icons.category.idle, scale: 3}}
					selectedIcon={{uri: icons.category.active, scale: 3}}
					selected={this.state.selectedTab === enums.Tabs.CATEGORY}
					onPress={() => {
						this.setState({
							selectedTab: enums.Tabs.CATEGORY,
						});
					}}>
					<View style={styles.tab}>
						<Text style={styles.centering}>This is Topics tab</Text>
					</View>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					title={enums.Tabs.PROFILE}
					icon={{uri: icons.profile.idle, scale: 3}}
					selectedIcon={{uri: icons.profile.active, scale: 3}}
					selected={this.state.selectedTab === enums.Tabs.PROFILE}
					onPress={() => {
						this.setState({
							selectedTab: enums.Tabs.PROFILE,
						});
					}}>
					<View style={styles.tab}>
						<Text style={styles.centering}>This is Profile tab</Text>
					</View>
				</TabBarIOS.Item>

			</TabBarIOS>
		);
	}
};

var styles = StyleSheet.create({
	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	centering: {
		alignItems: "center",
		justifyContent: "center",
	},
	navWrap: {
		flex: 1,
		marginTop: 65, 
	},
	navText: {
		fontSize: 16,
		marginVertical: 10,
		paddingHorizontal: 10,
	},
	navTitle: {
		fontWeight: "bold",
		fontSize: 16,
		marginTop: 10,
		paddingHorizontal: 10,
	},
	navBar: {
		backgroundColor: "#fc0",
	},
});