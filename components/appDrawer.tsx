import 'react-native-gesture-handler';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Subscription from '../interfaces/subscriptions';
import BottomTab from './bottomTab';
import { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../interfaces/home';
import { BottomTabComponent } from './navigationHelper';
import TermsAndConditions from '../interfaces/termsAndConditions';
import Support from '../interfaces/support';
import Services from '../interfaces/services';
import Profiles from '../interfaces/profiles';

const LogOut = ({navigation}: {navigation: any}) => {
    useEffect(() => {
        if (navigation) {
            navigation.navigate('Login');
        }
    }, []);

    return null;
}

function AppDrawers() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={
                (props) => {
                    return(
                        <SafeAreaView>
                            <View style={{
                                height: 160,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                //backgroundColor: '#006666',
                                backgroundColor: '#191D5B',
                            }}>
                                {/* <Image
                                    source={require('../assets/images/logo.png')}
                                    style={{
                                        height: 100,
                                        width: 100,
                                    }}
                                /> */}
                                <Icon  size={80} color={'white'} name={'person-circle-outline'} />
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                }}>User name</Text>
                            </View>
                            <DrawerItemList {...props} />
                        </SafeAreaView>
                    )
                }
            }
            screenOptions={
                ({ route }) => ({
                    headerShown: true,
                })
            }
        >
            <Drawer.Screen name="CarCare Connect"  component={BottomTabComponent} />
            <Drawer.Screen name="Subscription" component={Subscription} />
            <Drawer.Screen name="Services" component={Services} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="Profile" component={Profiles} />
            <Drawer.Screen name="Terms and Conditions" component={TermsAndConditions} />
            <Drawer.Screen name="LogOut" component={LogOut} />
            
        </Drawer.Navigator>
    );
}

export default AppDrawers;