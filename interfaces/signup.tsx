import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const RegisterUsers = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = () => {
        //Todo: Sign Up logic
        navigation.navigate('Dashboards');
    }

    const handleBack = () => {
        navigation.navigate('DefaultLogin');
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.backCircleShape}>
                    <View style={styles.backbtn}>
                        <TouchableOpacity onPress={() => { handleBack() }}>
                            <Text style={styles.backText}><Icon name="arrow-back-outline" size={14} color='white' /> Back</Text>
                            <Text style={styles.backLoginText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <SafeAreaView style={styles.leaf}>
                    <Icon name="leaf-outline" size={25} color='black'/>
                </SafeAreaView>

                <View style={styles.CircleShapeView}>
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        placeholderTextColor="white"
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Phone'
                        placeholderTextColor="white"
                        onChangeText={(text) => setPhone(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor="white"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor="white"
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Confirm Password'
                        placeholderTextColor="white"
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry
                    />
                    
                    <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    leaf: {
        position: 'absolute',
        top: 30,
        right: 0,
        marginRight: 20,
    },
    
    backCircleShape: {
        top: 0,
        left: 0,
        width: width * 0.4,
        height: height * 0.18,
        borderBottomRightRadius: 700,
        backgroundColor: '#2B38EF',
    },
    backbtn: {
        top: 50,
        width: 150,
        height: 100,
        alignSelf: 'flex-start',
        marginLeft: 15,
    },
    backLoginText: {
        fontSize: 25,
        color: 'white',
    },
    backText: {
        fontSize: 16,
        color: 'white',
    },
    CircleShapeView: {
        bottom: height * -0.07,
        width: width * 1.3,
        height: height * 0.75,
        borderTopRightRadius: width * 0.6,
        borderTopLeftRadius: width * 0.6,
        backgroundColor: '#191D5B',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    input: {
        height: 50,
        width: 325,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
        backgroundColor: '#39437A',
    },
    button: {
        backgroundColor: '#2B38EF',
        height: height * 0.07,
        margin: width * 0.03,
        padding: height * 0.02,
        borderRadius: width * 0.04,
        width: width * 0.25,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
});

export default RegisterUsers;
