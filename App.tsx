import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./interfaces/Loginscreen";
import RegisterUsers from "./interfaces/signup";
import Dashboards from "./interfaces/dashboard";
import Jobs from "./interfaces/jobs";
import Accounts from "./interfaces/accountability";
import Inquiries from "./interfaces/inquiries";
import Home from "./interfaces/home";
import BottomTab from "./components/bottomTab";
import DefaultLogin from "./interfaces/defaultLogin";
import Jobs2 from "./interfaces/jobs2";
import SplashScreen from "./interfaces/splashScreen";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="SplashScreen" options={{headerShown: false}} component={SplashScreen} />
				<Stack.Screen name="DefaultLogin" options={{headerShown: false}} component={DefaultLogin} />
				<Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
				<Stack.Screen name="Register" options={{headerShown: false}} component={RegisterUsers} />
				<Stack.Screen name="Dashboards" options={{ headerShown: false }} component={Dashboards} />
				<Stack.Screen name="Jobs" component={Jobs} />
				<Stack.Screen name="Accounts" component={Accounts} />
				<Stack.Screen name="Inquiries" component={Inquiries} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="BottomTab" component={BottomTab} />
				<Stack.Screen name="Jobs2" component={Jobs2} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;