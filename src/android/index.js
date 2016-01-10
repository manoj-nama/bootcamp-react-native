'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Navigator,
	TouchableOpacity,
	Text,
	View
} from 'react-native';

import LoginPage from './pages/login';

export default class BootcampApp extends Component {

	render() {
		const routeMapper = {
			LeftButton: (route, navigator, index, navState) => {
				if (index === 0) {
					return null;
				}
				const previousRoute = navState.routeStack[index - 1]
				return (
					<TouchableOpacity
						onPress={() => navigator.pop()}>
						<Text style={styles.navText}>
						  {previousRoute.name}
						</Text>
					</TouchableOpacity>
				)
			},
			RightButton: (route, navigator, index, navState) => {
				if (route.rightElement) {
					return route.rightElement
				}
			},
			Title: (route, navigator, index, navState) => {
				return (
					<Text style={styles.navText}>{route.name}</Text>
				)
			}
		};
		return (
			<Navigator
				automaticallyAdjustsScrollViewInsets={true}
				initialRoute={{name: 'Login', component: LoginPage}}
				navigationBar={
					<Navigator.NavigationBar style={styles.navBar} routeMapper={routeMapper} />
				}
				configureScene={() => {
				  return Navigator.SceneConfigs.PushFromRight;
				}}
				renderScene={(route, navigator) => {
				  if (route.component) {
				      return React.createElement(route.component, { navigator, route });
				  }
				}} />
		);
	}
};

const styles = StyleSheet.create({
	nav: {
		flex: 1,
	},
	navWrap: {
		flex: 1,
		marginTop: 65, 
	},
	navText: {
		fontSize: 16,
		marginTop: 10,
		paddingHorizontal: 10,
	},
	navBar: {
		backgroundColor: "#fc0",
	}
});