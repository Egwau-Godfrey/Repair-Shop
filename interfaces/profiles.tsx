import React from "react";
import { Image, TextInput } from "react-native";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageLibraryOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { useState } from "react";

function Profiles() {
    const [showGeneral, setGeneral] = React.useState(true); // Default to FAQs

    const toggleGeneral = () => setGeneral(true);
    const toggleLicense = () => setGeneral(false);

    return(
        <ScrollView>
            <View style={styles.GLRow}>
                <TouchableOpacity style={styles.GbtnStyle} onPress={toggleGeneral}>
                    <Text style={[styles.btnText, showGeneral && styles.activeBtnText]}>General</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.LbtnStyle} onPress={toggleLicense}>
                    <Text style={[styles.btnText, !showGeneral && styles.activeBtnText]}>License</Text>
                </TouchableOpacity>
            </View>
            <View>
                {showGeneral ? <GeneralFunction /> : <LicenseFunction />}
            </View>
        </ScrollView>
    );
}

function GeneralFunction() {
    const [ShowUserName, setUserName] = useState('John Doe');
    const [ShowEmail, setEmail] = useState('John@Doe.com');
    const [ShowContact, setContact] = useState('0775140987');
    const [ShowPassword, setPassword] = useState('john');
    return(
        <View>
            <View style={styles.GeneralIcon}>
                <Icon  size={80} color={'black'} name={'person-circle-outline'} />
            </View>
            
            <View style={styles.GeneralContainer}>
                <Text style={styles.textaboveInput}>Name</Text>
                <TextInput style={styles.input} readOnly={true}>{ShowUserName}</TextInput>
                
                <Text style={styles.textaboveInput}>Email</Text>
                <TextInput style={styles.input}>{ShowEmail}</TextInput>
                
                <Text style={styles.textaboveInput}>Contact</Text>
                <TextInput style={styles.input}>{ShowContact}</TextInput>
                
                <Text style={styles.textaboveInput}>Password</Text>
                <TextInput style={styles.input}>{ShowPassword}</TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function LicenseFunction() {
    const [ShowNationality, setNationality] = useState('Ugandan');
    const [ShowLicense, setLicense] = useState('12370534');
    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
    
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorCode);
            } else {
                let imageUri = response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };
    
    const handleCameraLaunch = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
    
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorCode);
            } else {
                let imageUri = response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };

    return(
        <View style={styles.LicenseContainer}>
            <View>
                <Text style={styles.textaboveInput}>Nationality</Text>
                <TextInput style={styles.input}>{ShowNationality}</TextInput>

                <Text style={styles.textaboveInput}>License Number/ Permit Number</Text>
                <TextInput style={styles.input}>{ShowLicense}</TextInput>
                
                <Text style={styles.textaboveInput}>Permit Image</Text>
                {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
                
                <View style={styles.STRow}>
                    <TouchableOpacity onPress={openImagePicker} style={styles.Ibutton}>
                        <Text style={styles.buttonText}>Select Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCameraLaunch} style={styles.Ibutton}>
                        <Text style={styles.buttonText}>Take Image</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    GLRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    STRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    GbtnStyle: {
        backgroundColor: 'white',
        height: 60,
        width: 184,
        padding: 10,
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
    LbtnStyle: {
        backgroundColor: 'white',
        height: 60,
        width: 184,
        padding: 10,
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
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
    },
    activeBtnText: {
        color: 'blue',
    },
    GeneralIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    GeneralContainer: {
        padding: 15,
    },
    LicenseContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: 325,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
        color: 'black', // Specify the placeholder text color here
        // backgroundColor: '#DEDFED',
    },
    textaboveInput: {
        color: 'black',
        fontSize: 16,
        marginLeft: 15,
    },
    button: {
        backgroundColor: '#2B38EF',
        height: 50,
        width: 325,
        margin: 12,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Ibutton: {
        backgroundColor: '#2B38EF',
        height: 50,
        width: 150,
        margin: 0,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Profiles;