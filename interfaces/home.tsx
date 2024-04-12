import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppDrawer from '../components/appDrawer';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import EIcons from 'react-native-vector-icons/Entypo';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabComponent } from '../components/navigationHelper';


function Home({ navigation }: { navigation: any}) {

    const addNewJob = () => {
        navigation.navigate('Job');
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View>
                    <TouchableOpacity style={styles.createNewJob} onPress={() => {addNewJob()}}>
                        <Text style={styles.NewJobbtnText}><Text style={styles.btnSymbol}>+</Text>   CREATE NEW JOB</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.openJobRow}>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Icon name="car-outline" color={'black'} size={24}/>
                            <Text style={styles.btnText}>MOT Test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Icon name="hammer-outline" color={'black'} size={24}/>
                            <Text style={styles.btnText}>Servicing</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.openJobRow}>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <EIcons name="tools" color={'black'} size={24}/>
                            <Text style={styles.btnText}>Repairs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <MIcons name="car-door" color={'black'} size={24}/>
                            <Text style={styles.btnText}>Body Shops</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.HomeBodyText}>
                    <Text style={styles.defaultText}>MOT Test - Ministry of Transport Test </Text>
                    <Text style={styles.defaultText}>Servicing - Servicing a Car</Text>
                    <Text style={styles.defaultText}>Repairs - Repairs to be made</Text>
                    <Text style={styles.defaultText}>Body Shop - Modify look of Car</Text>
                </View>
            </ScrollView>
            <View>
                {/* <BottomTabComponent /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    HomeBodyText: {
        margin: 16, // Increased margin for spacing 
    },
    createNewJob: {
        backgroundColor: '#2B38EF',
        height: 50,
        margin: 16, // Increased margin
        padding: 12, // Slightly increased padding
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    btnSymbol: {
        fontSize: 20,
    },
    NewJobbtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    openJobRow: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Distribute buttons
        margin: 10, // Increased margin
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: 100,
        width: 160, // Reduced width slightly 
        padding: 15, // Increased padding
        margin: 8, // Less margin between buttons
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    btnText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
    },
    defaultText: {
        color: 'black',
        margin: 8, 
    },
});

export default Home;