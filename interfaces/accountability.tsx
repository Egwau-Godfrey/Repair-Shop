import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

function Accounts() {
    const [ShowPending, setShowPending] = React.useState(true); // Default to FAQs

    const togglePending = () => setShowPending(true);
    const toggleHistory = () => setShowPending(false);

    return (
        <ScrollView>
            <View style={styles.PendingRow}>
                <TouchableOpacity style={styles.PendingBtn} onPress={togglePending}> 
                    <Text style={[styles.btnText, ShowPending && styles.activeBtnText]}>Pending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.HistoryBtn} onPress={toggleHistory}>
                    <Text style={[styles.btnText, !ShowPending && styles.activeBtnText]}>History</Text>
                </TouchableOpacity>
            </View>
            <View>
                {ShowPending ? <PendingFunction /> : <HistoryFunction />}
            </View>
        </ScrollView>
    )
}

function PendingFunction() {
    const [jobToken, setJobToken] = React.useState('345Fd3');
    const [numberPlate, setNumberPlate] = React.useState('UBA207D');
    const [status, setStatus] = React.useState('Pending');
    const [timeLeft, setTimeLeft] = React.useState('1 Hour 30 Minutes');

    return (
        <View style={styles.PendingContainer}> 
            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Job Token: </Text>
                <Text style={styles.defaultText}>{jobToken}</Text>
            </View>
                
            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Number Plate: </Text>
                <Text style={styles.defaultText}>{numberPlate}</Text>
            </View>

            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Status: </Text>
                <Text style={styles.defaultText}>{status}</Text>
            </View>

            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Time Left: </Text>
                <Text style={styles.defaultText}>{timeLeft}</Text> 
            </View>
            
        </View>
    );
}

function HistoryFunction() {
    const [jobToken, setJobToken] = React.useState('345Fd3');
    const [numberPlate, setNumberPlate] = React.useState('UBA207D');
    const [status, setStatus] = React.useState('Pending');
    const [date, setDate] = React.useState('21/03/2024');
    const [mechanic, setMechanic] = React.useState('John Doe');
    const [garage, setGarage] = React.useState('Hero Garage');
    const [report, setReport] = React.useState('Report goes here...');
    const [charge, setCharge] = React.useState('UGX 200,000');

    return (
        <View style={styles.HistoryContainer}>
            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Job Token: </Text>
                <Text style={styles.defaultText}>{jobToken}</Text>
            </View>
                
            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Number Plate: </Text>
                <Text style={styles.defaultText}>{numberPlate}</Text>
            </View>

            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Date: </Text>
                <Text style={styles.defaultText}>{date}</Text> 
            </View>

            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Mechanic Name: </Text>
                <Text style={styles.defaultText}>{mechanic}</Text>
            </View>

            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Garage: </Text>
                <Text style={styles.defaultText}>{garage}</Text>
            </View>

            <View style={styles.TextBox}>
                <Text style={styles.defaultText}>report: </Text>
                <TextInput style={styles.inputArea} readOnly={true}>{report}</TextInput>
            </View>

            <View style={styles.TextRow}>
                <Text style={styles.defaultText}>Charge: </Text>
                <Text style={styles.defaultText}>{charge}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    TextBox: {
        margin: 12,
    },
    TextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    PendingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    PendingBtn: {
        backgroundColor: 'white',
        height: 60,
        width: 184,
        padding: 10,
        // borderStartStartRadius: 20,
        // borderEndStartRadius: 20,

        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    HistoryBtn: {
        backgroundColor: 'white',
        height: 60,
        width: 184,
        padding: 10,
        // borderEndEndRadius: 20,
        // borderStartEndRadius: 20,

        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    btnText: {
        fontSize: 16,
        color: 'black',
    },
    activeBtnText: {
        color: 'blue',
    },
    PendingContainer: {
        padding: 15,
    },
    HistoryContainer: {
        padding: 15,
    },
    inputArea: {
        height: 150,
        width: 325,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
        // backgroundColor: '#DEDFED',
    },
    defaultText: {
        color: 'black'  
    },
});

export default Accounts;