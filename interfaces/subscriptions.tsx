import { Text, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { BottomTabComponent } from '../components/navigationHelper';
import { TouchableOpacity } from "react-native-gesture-handler";

function Subscription() {
    return (
        <ScrollView>
            <Text style={styles.headText}>
                Subscription Plans
            </Text>
            <Text style={styles.SubheadText}>
                One time Subscriptions
            </Text>
            <View>
                <View style={styles.MotRow}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.defaultText}>MOT Test</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.defaultText}>Repairs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.MotRow}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.defaultText}>Service</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.defaultText}>Body Shop</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.SubheadText}>
                Other plans
            </Text>
            <View>
                <View style={styles.MotRow}>
                    <TouchableOpacity style={styles.buttonStyle2}>
                        <Text style={styles.defaultText}>Weekly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle2}>
                        <Text style={styles.defaultText}>Monthly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle2}>
                        <Text style={styles.defaultText}>Yearly</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 16, // Increased margin for better spacing
        color: 'black',
    },
    SubheadText: {
        fontSize: 18,
        textAlign: 'left',
        margin: 16, // Increased margin 
        color: 'black',
    },
    MotRow: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Distribute buttons with space around
        margin: 16, // Increased margin
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: 100,
        width: 160, // Reduced width slightly to accommodate spacing
        padding: 15,  // Increased padding for visual breathing room
        margin: 8, // Less margin between buttons
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    buttonStyle2: {
        backgroundColor: 'white',
        height: 80,
        width: 100,  // Reduced width slightly 
        padding: 15,  // Increased padding
        margin: 8,   // Less margin between buttons
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    defaultText: {
        color: 'black'  
    },
});

export default Subscription;