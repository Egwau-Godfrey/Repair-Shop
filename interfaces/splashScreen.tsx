import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;
  const scaleAnimation = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate('DefaultLogin');
    }, 3000);
  }, [fadeAnimation, scaleAnimation, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          { opacity: fadeAnimation, transform: [{ scale: scaleAnimation }] },
        ]}
      >
        <Image style={styles.logo} source={require('../images/logo.png')} />
      </Animated.View>
      <Animatable.Text
        animation="fadeInUp"
        duration={1500}
        style={styles.title}
      >
        CarCare Connect
      </Animatable.Text>
      <Animatable.View
        animation="zoomIn"
        duration={2000}
        delay={500}
        style={styles.circle}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const circleSize = width * 1.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191D5B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: width * 0.5, // 50% of screen width
    height: width * 0.5, // 50% of screen width
    borderRadius: (width * 0.5) / 2, // half of width
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% of screen height
  },
  logo: {
    width: width * 0.375, // 37.5% of screen width
    height: height * 0.125, // 12.5% of screen height
  },
  title: {
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: 'bold',
    color: 'white',
    marginBottom: height * 0.05, // 5% of screen height
  },
  circle: {
    width: width * 1.2, // 120% of screen width
    height: width * 1.2, // 120% of screen width
    borderRadius: (width * 1.2) / 2, // half of width
    backgroundColor: '#EAEBF6',
    position: 'absolute',
    bottom: -(width * 1.2) / 2, // half of width
  },
});

export default SplashScreen;