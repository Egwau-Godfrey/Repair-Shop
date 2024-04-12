import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Inquiries() {
    const [messages, setMessages] = useState<{ sender: string; text: string; }[]>([]);
    const [inputText, setInputText] = useState('');

    const handleMessageSend = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { sender: 'user', text: inputText.trim() }]);
            setInputText('');
            // Here you would send the inputText to ChatGPT and handle the response
            // For now, we're just adding the user's message to the chat history
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.messagesContainer}>
                {messages.map((message, index) => (
                    <View key={index} style={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
                        <Text style={styles.messageStyle}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your message..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messagesContainer: {
        flexGrow: 1,
        padding: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#6DD770',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    messageStyle: {
        color: 'black'
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#EAEAEA',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: windowWidth * 0.02, // 2% of window width
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: 'black',
        borderRadius: 20,
        paddingHorizontal: windowWidth * 0.04, // 4% of window width
        marginRight: windowWidth * 0.02, // 2% of window width
        paddingVertical: windowHeight * 0.02, // 2% of window height
    },
    sendButton: {
        backgroundColor: '#2B38EF',
        borderRadius: 20,
        paddingVertical: windowHeight * 0.015, // 1.5% of window height
        paddingHorizontal: windowWidth * 0.04, // 4% of window width
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default Inquiries;
