import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Button, View, Alert, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');


function LoginScreen({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const handleLogin = () => {
        //Todo: Login logic
        navigation.navigate('Dashboards');
    }

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const handleBack = () => {
        navigation.navigate('DefaultLogin');
    };

    return(
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

                <View style={styles.OutestCirlces}>
                    <View style={styles.outerCirlceShape}>
                        <View style={styles.CircleShapeView}>
                            <TextInput style={styles.input}
                                placeholder='Username'
                                placeholderTextColor="white"
                                onChangeText={(text) => setUsername(text)}
                            />

                            <TextInput style={styles.input}
                                placeholder='Password'
                                placeholderTextColor="white"
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry
                            />

                            <TouchableOpacity style={styles.forgotPass}>
                                <Text style={styles.forgetText}>Forgot Password?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {handleLogin()}} style={styles.button}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
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
    OutestCirlces: {
        bottom: height * -0.05,
        width: width * 1.3, // 14% of screen width
        height: height * 0.76, // 60% of screen height
        borderTopEndRadius: width * 0.6, // 60% of screen width
        borderTopStartRadius: width * 0.6, // 60% of screen width
        backgroundColor: '#EAEBF6',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    outerCirlceShape: {
        bottom: height * -0.05,
        width: width * 1.3, // 130% of screen width
        height: height * 0.68, // 50% of screen height
        borderTopEndRadius: width * 0.6, // 60% of screen width
        borderTopStartRadius: width * 0.6, // 60% of screen width
        backgroundColor: '#D5D6EC',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    CircleShapeView: {
        bottom: height * -0.05,
        width: width * 1.3, // 112% of screen width
        height: height * 0.6, // 40% of screen height
        borderTopEndRadius: width * 0.6, // 60% of screen width
        borderTopLeftRadius: width * 0.6, // 60% of screen width
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
        color: 'white',
    },

    button: {
        backgroundColor: '#2B38EF',
        height: height * 0.07, // 6% of screen height
        margin: width * 0.03, // 3% of screen width
        padding: height * 0.02, // 2% of screen height
        borderRadius: width * 0.04, // 4% of screen width
        width: width * 0.25, // 25% of screen width
    },
    forgetText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    safea: {
        marginTop: 50,
    },
    forgotPass: {
        marginLeft: 205,
        margin: 12,
    },
});

export default LoginScreen;