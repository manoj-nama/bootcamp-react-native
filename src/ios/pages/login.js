'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	ActivityIndicatorIOS,
	View,
} from 'react-native';

import DashboardPage from './dashboard';

export default class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isBusy: false
		};
	}

	doLogin() {
		if(!this.state.isBusy) {
			this.setState({isBusy: true});	
			setTimeout(() => {
				this.setState({isBusy: false});
				this.props.navigator.replace({
					name: "Sessions",
					component: DashboardPage,
				});
			}, 500);
		}
	}

	render() {
		return (
			<View style={styles.nav}>
				<TextInput
					keyboardType="email-address"
					autoCorrect={false}
					style={styles.txt}
					autoCapitalize="none"
					placeholder="Email" />

				<TextInput 
					style={styles.txt}
					secureTextEntry={true}
					placeholder="Password" />

				<TouchableOpacity style={styles.loginBtn}
					activeOpacity={0.3}
					onPress={this.doLogin.bind(this)}>
					<View>
						{
							this.state.isBusy ? 
							<ActivityIndicatorIOS style={[styles.centering, {height: 20}]} /> :
							<Text style={styles.btnTxt}>Login</Text>
						}					
					</View>
				</TouchableOpacity>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	nav: {
		flexDirection: 'column',
		paddingTop: 100,
		flex: 1,
	},
	copy: {
		paddingTop: 40,
		paddingBottom: 15,
		justifyContent: 'center',
		paddingHorizontal: 20,
		flex: 1,
	},
	txt: {
		height: 40,
		borderBottomWidth: 1,
		fontSize: 16,
		padding: 10,
		borderRadius: 5,
		margin: 10,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	loginBtn: {
		paddingVertical: 10,
		marginHorizontal: 70,
		marginVertical: 20,
		borderRadius: 5,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#aaa",
		alignItems: 'center',
	},
	btnTxt: {
		fontSize: 16,
	},
	centering: {
		alignItems: "center",
		justifyContent: "center",
	}
});