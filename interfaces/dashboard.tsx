import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Subscription from './subscriptions';
import BottomTab from '../components/bottomTab';
import AppDrawers from '../components/appDrawer';

function Dashboards() {
    const Tab = createBottomTabNavigator();
    return (
        <View style={{flex:1}}>
            <AppDrawers />
        </View>
        );
    };

export default Dashboards;