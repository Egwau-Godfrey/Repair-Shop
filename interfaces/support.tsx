import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

function Support() {
    const [showFAQs, setShowFAQs] = React.useState(true); // Default to FAQs

    const toggleFAQs = () => setShowFAQs(true);
    const toggleContacts = () => setShowFAQs(false);

    return (
        <ScrollView>
            <View style={styles.FAQsRow}>
                <TouchableOpacity style={styles.Faqbtn} onPress={toggleFAQs}> 
                    <Text style={[styles.btnText, showFAQs && styles.activeBtnText]}>FAQs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Contactbtn} onPress={toggleContacts}>
                    <Text style={[styles.btnText, !showFAQs && styles.activeBtnText]}>Contact Us</Text>
                </TouchableOpacity>
            </View>
            <View>
                {showFAQs && FAQsFunction()}  
                {!showFAQs && ContactsFunction()}
            </View>
        </ScrollView>
    )
}


function FAQsFunction() {
    return (
        <View style={styles.faqContainer}> 
            <View style={styles.questionItem}>
                <Text style={styles.questionText}>How do I book a mechanic?</Text>
                <Text style={styles.answerText}>Explain the booking process here...</Text> 
            </View>
            <View style={styles.questionItem}>
                <Text style={styles.questionText}>What payment methods are accepted?</Text>
                <Text style={styles.answerText}>List accepted payment options...</Text> 
            </View>
            <View style={styles.questionItem}>
                <Text style={styles.questionText}>How do I track my mechanic's progress?</Text>
                <Text style={styles.answerText}>Describe progress tracking features...</Text> 
            </View>
            {/* ... Add more questions as needed ... */}
        </View>
    );
}

function ContactsFunction() {
    return (
        <View style={styles.contactTextFull}>
            <View style={styles.contactText}>
                <Icon name="call-outline" color={'black'} size={25}/>
                <Text style={styles.contactTextFormat}>  +256 775140989</Text>
            </View>
            <View style={styles.contactText}>
                <Icon name="mail-outline" color={'black'} size={25}/>
                <Text style={styles.contactTextFormat}>  carcareConnect@admin.com</Text>
            </View>
            <View style={styles.contactText}>
                <Icon name="logo-whatsapp" color={'black'} size={25}/>
                <Text style={styles.contactTextFormat}>  +256 775140989</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    defaultText: {
        color: 'black'  
      },
    FAQsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    Faqbtn: {
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
    Contactbtn: {
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
        fontSize: 16,
        color: 'black',
    },
    activeBtnText: {
        color: 'blue',
    },
    faqContainer: {
        padding: 15,  
    },
    questionItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0', 
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        color: 'black',
    },
    answerText: {
        fontSize: 16,
        color: 'black',
    },
    contactText: {
        flexDirection: 'row',
        margin: 12,
        justifyContent: 'flex-start',
    },
    contactTextFull: {
        margin: 12,
    },
    contactTextFormat: {
        fontSize: 16,
        color: 'black',
    }
})

export default Support;