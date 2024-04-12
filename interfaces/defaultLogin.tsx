import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function DefaultLogin({ navigation }: { navigation: any}) {
    const handleLoginBtn = () => {
        navigation.navigate('Login');
    };
    const handleSignUpBtn = () => {
        navigation.navigate('Register');
    };
    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../images/logo.png')} // replace with the path to your image
            />
            <Text style={styles.topText}>CarCare Connect</Text>
            <View style={styles.OutestCirlces}>
                <View style={styles.outerCirlceShape}>
                    <View style={styles.CircleShapeView}>
                        <TouchableOpacity style={styles.btnDesign} onPress={() => {handleLoginBtn()}}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDesign} onPress={() => {handleSignUpBtn()}}>
                            <Text style={styles.btnText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        position: 'absolute',
        top: height * 0.1, // 10% of screen height
        width: width * 0.4, // 40% of screen width
        height: height * 0.15, // 15% of screen height
        alignSelf: 'center',
    },
    topText: {
        position: 'absolute',
        top: height * 0.3, // 30% of screen height
        fontSize: width * 0.06, // 6% of screen width
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: 'black'
    },
    OutestCirlces: {
        position: 'absolute',
        bottom: 0,
        width: width * 1.4, // 14% of screen width
        height: height * 0.6, // 60% of screen height
        borderTopEndRadius: width * 0.6, // 60% of screen width
        borderTopStartRadius: width * 0.6, // 60% of screen width
        backgroundColor: '#EAEBF6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerCirlceShape: {
        position: 'absolute',
        bottom: 0,
        width: width * 1.3, // 130% of screen width
        height: height * 0.5, // 50% of screen height
        borderTopEndRadius: width * 0.6, // 60% of screen width
        borderTopStartRadius: width * 0.6, // 60% of screen width
        backgroundColor: '#D5D6EC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleShapeView: {
        position: 'absolute',
        bottom: 0,
        width: width * 1.2, // 112% of screen width
        height: height * 0.4, // 40% of screen height
        borderTopEndRadius: width * 0.6, // 60% of screen width
        borderTopLeftRadius: width * 0.6, // 60% of screen width
        backgroundColor: '#191D5B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDesign: {
        backgroundColor: '#2B38EF',
        height: height * 0.07, // 6% of screen height
        margin: width * 0.03, // 3% of screen width
        padding: height * 0.02, // 2% of screen height
        borderRadius: width * 0.04, // 4% of screen width
        width: width * 0.25, // 25% of screen width
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default DefaultLogin;