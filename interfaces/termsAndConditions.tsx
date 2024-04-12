import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CarCare Connect Terms and Conditions</Text>
      <Text style={styles.subtitle}>Last Updated: [Insert Date]</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.defaultText}>
          Welcome to CarCare Connect. By accessing or using our mobile application,
          you agree to comply with and be bound by these Terms and Conditions.
          If you do not agree with any part of these terms, you may not use our app.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Description of Service</Text>
        <Text style={styles.defaultText}>
          CarCare Connect is a platform that connects mechanics with customers
          seeking automotive services. The app facilitates communication, booking,
          and payment for services rendered by mechanics.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. User Accounts</Text>
        <Text style={styles.defaultText}>
          To use certain features of CarCare Connect, you may be required to create
          a user account. You are responsible for maintaining the confidentiality
          of your account information and agree to notify us immediately of any
          unauthorized use of your account.
        </Text>
      </View>

      {/* Add more sections as needed for your specific Terms and Conditions */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
        <Text style={styles.defaultText}>
          CarCare Connect shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of profits
          or revenues, whether incurred directly or indirectly, or any loss of
          data, use, goodwill, or other intangible losses, resulting from (a)
          your access to or use of or inability to access or use the app; (b)
          any unauthorized access to or use of our secure servers and/or any
          personal information stored therein.
        </Text>
      </View>

      <Text style={styles.footerText}>
        For the complete set of Terms and Conditions, please refer to the official
        documentation on the CarCare Connect website.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color: 'black'  
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    marginTop: 20,
  },
});

export default TermsAndConditions;
