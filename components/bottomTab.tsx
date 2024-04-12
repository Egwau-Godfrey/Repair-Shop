import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../interfaces/home';
import Jobs from '../interfaces/jobs';
import Inquiries from '../interfaces/inquiries';
import Accounts from '../interfaces/accountability';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeComponent } from './navigationHelper';
import Subscription from '../interfaces/subscriptions';

function BottomTab() {
    const Tab = createBottomTabNavigator();
    //const Tab = createBottomTabNavigator<RootBottomTabParamList>();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                //headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let IconName: string = '';
        
                    if (route.name === 'Home') {
                        IconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Job') {
                        IconName = focused ? 'list' : 'list'; 
                    } else if (route.name === 'Inquiry') {
                        IconName = focused ? 'help-circle-outline' : 'help-circle-outline';
                    } else if (route.name === 'Accountability') {
                        IconName = focused ? 'receipt-outline' : 'receipt-outline';
                    }

                    // Return the Icon component with the appropriate name, color, and size 
                    return <Icon  size={size} color={color} name={IconName} />;
                },
            })}
        >
            <Tab.Screen name="Home" options={{headerShown: false}} component={HomeComponent} /> 
            <Tab.Screen name="Job" options={{headerShown: false}} component={Jobs} />
            <Tab.Screen name="Inquiry" options={{headerShown: false}} component={Inquiries} />
            <Tab.Screen name="Accountability" options={{headerShown: false}} component={Accounts} />
        </Tab.Navigator>
);
}

export default BottomTab;