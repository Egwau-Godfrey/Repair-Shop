import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

function Jobs2({ navigation }: { navigation: any}) {
    const [ShowLocation, setLocation] = useState('Kampala');
    const [ShowNumberPlate, setNumberPlate] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSubmit = () => {
        return(
            navigation.navigate('Dashboards')
        );
    };

    const takePhotoFromCamera = () => {
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
    }
    
    const choosePhotoFromLibrary = () => {
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
    }

    return(
        <ScrollView style={styles.FormStyle}>
            <View>
                <Text style={styles.PageHeader}>Part 2</Text>
            </View>

            <View>
                <Text style={styles.textaboveInput}>Location</Text>
                <TextInput style={styles.input} readOnly={true}>{ShowLocation}</TextInput>
            </View>
            <View>
                <Text style={styles.textaboveInput}>Number Plate</Text>
                <TextInput style={styles.input} onChangeText={setNumberPlate}/>
            </View>
            <View>
                <Text style={styles.textaboveInput}>Car Image</Text>
                <View>
                    <View style={styles.btnRow}>
                        <TouchableOpacity style={styles.Ibutton} onPress={takePhotoFromCamera}>
                            <Text style={styles.buttonText}>Take Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Ibutton} onPress={choosePhotoFromLibrary}>
                            <Text style={styles.buttonText}>Select Image</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.textaboveInput}>Problem Description</Text>
                <TextInput style={styles.inputArea} onChangeText={setNumberPlate}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {handleSubmit()}}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Ibutton: {
        backgroundColor: '#2B38EF',
        height: 50,
        width: 150,
        margin: 12,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PageHeader: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        height: 50,
        width: 325,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
        color: 'black',
        // backgroundColor: '#DEDFED',
    },
    inputArea: {
        height: 150,
        width: 325,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
        color: 'black',
        // backgroundColor: '#DEDFED',
    },
    button: {
        backgroundColor: '#2B38EF',
        width: 150,
        padding: 16,
        marginEnd: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        elevation: 6,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    FormStyle: {
        margin: 12,
    },
    textaboveInput: {
        color: 'black',
        fontSize: 16,
        marginLeft: 15,
    },
    defaultText: {
          color: 'black'  
    },
});

export default Jobs2;