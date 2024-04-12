import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper'; 
import { SelectList } from 'react-native-dropdown-select-list'

function Jobs({ navigation }: { navigation: any }) {
    const [checked, setChecked] = useState('first');
    
    const [selectedMake, setSelectedMake] = React.useState("");
    const [selectedModel, setSelectedModel] = React.useState("");
    const [selectedVariant, setSelectedVariant] = React.useState("");

    const CarMake = [
        { key: 'Toyota', value: 'Toyota' },
        { key: 'Honda', value: 'Honda' },
        { key: 'Ford', value: 'Ford' },
        { key: 'Lexus', value: 'Lexus' },
        { key: 'Tesla', value: 'Tesla' },
        { key: 'Rivian', value: 'Rivian' },
    ];

    const carModel = [
        { label: 'Model 1', value: 'Model 1' },
        { label: 'Model 2', value: 'Model 2' },
        { label: 'Model 3', value: 'Model 3' },
    ];

    const carVariant = [
        { label: 'Variant 1', value: 'Variant 1' },
        { label: 'Variant 2', value: 'Variant 2' },
        { label: 'Variant 3', value: 'Variant 3' },
        // Add more car variants as needed
    ];

    const handleNextBtn = () => {
        return(
            navigation.navigate('Jobs2')
        );
    };

    return(
        <ScrollView style={styles.FormStyle}>
            <View>
                <Text style={styles.radioHeader}>Part 1</Text>
            </View>
            <View>
                    <Text style={styles.radioHeader}>Fuel type</Text>
                    <View style={styles.radioRow}>
                        <View style={styles.radioButton}>
                            <RadioButton 
                                value="Petrol"
                                status={ checked === 'Petrol' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('Petrol')}
                            />
                            <Text style={styles.defaultText}>Petrol</Text>
                        </View>
                        
                        <View style={styles.radioButton}>
                            <RadioButton 
                                value="Diesel"
                                status={ checked === 'Diesel' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('Diesel')}
                            />
                            <Text style={styles.defaultText}>Diesel</Text>
                        </View>

                        <View style={styles.radioButton}>
                            <RadioButton 
                                value="Electric"
                                status={ checked === 'Electric' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('Electric')}
                            />
                            <Text style={styles.defaultText}>Electric</Text>
                        </View>

                    </View>

                    <View>
                        <View style={styles.dropDownBox}>
                            <Text style={styles.defaultText}>Car Make</Text>
                            <SelectList 
                                setSelected={(val: any) => setSelectedMake(val)} 
                                data={CarMake} 
                                save="value"
                                inputStyles={{color: 'black'}}
                                dropdownTextStyles={{color: 'black'}}
                            />
                        </View>

                        <View style={styles.dropDownBox}>
                            <Text style={styles.defaultText}>Car Model</Text>
                            <SelectList 
                                setSelected={(val: any) => setSelectedModel(val)} 
                                data={carModel} 
                                save="value"
                                inputStyles={{color: 'black'}}
                                dropdownTextStyles={{color: 'black'}}
                            />
                        </View>

                        <View style={styles.dropDownBox}>
                            <Text style={styles.defaultText}>Car Variant</Text>
                            <SelectList 
                                setSelected={(val: any) => setSelectedVariant(val)} 
                                data={carVariant} 
                                save="value"
                                inputStyles={{color: 'black'}}
                                dropdownTextStyles={{color: 'black'}}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.nextBtn} onPress={() => {handleNextBtn()}}>
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        padding: 20,
        elevation: 6,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    radioHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: 'black',
    },
    dropdownStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        elevation: 6,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    dropDownBox: {
        marginBottom: 25,
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#f2f2f2',
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    dropDownText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    FormStyle: {
        margin: 12,
    },
    nextBtn: {
        backgroundColor: '#2B38EF',
        width: 150,
        padding: 16,
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
    btnText: {
        color: 'white',
        fontSize: 16,
    },
    defaultText: {
        color: 'black'  
    },
});

export default Jobs;
