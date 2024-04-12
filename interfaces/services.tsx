import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { TouchableOpacity } from "react-native";

function Services() {
    return(
        <View>
            <View style={styles.BtnRow}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.btnText}>EMOT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.btnText}>Repair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.BtnRow}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.btnText}>Servicing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.btnText}>Body Shop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    BtnRow: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Distribute buttons with spacing
        margin: 8,
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: 100,
        width: 160, // Slightly reduced button width
        padding: 15, // Increased padding for text
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
});

export default Services;    