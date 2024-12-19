import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';

const LoginScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.brandContainer}>
        <Image
          source={require('../../assets/images/logoBlue.png')}
          style={styles.logo} 
        />
      <Text
       style={styles.brandName}
      >
        Escape Route
      </Text>
    </View>

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.mainHeader}>Welcome Back!</Text>
          <Text style={styles.secondaryHeader}>Please enter your account here</Text>
        </View>
        <View>
          <Input
            placeholder="Email"
            style={styles.input}
          />
        </View>

        <View>
          <Input
            placeholder="Password"
            style={styles.input}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Password')}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text="Login"
          />
        </View>


        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Register')
            }
          >
            <Text style={styles.loginText}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View> 
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    height: 56,
    
  },

  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },

  mainHeader: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },

  secondaryHeader: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
    color: "#8189B0",
  },

  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center' ,
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 64
  },

  logo: {
    width: 60,
    height: 90
  },

  brandName: {
    fontSize: 16.42,
    // marginLeft: 10,
    color: '#163C9F'
  },

  forgotText: {
    color: '#163C9F',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'right',
    marginRight: 24,
    marginBottom: 40
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  Button: {
    padding: 8,
  },

  textContainer: {
    flexDirection: 'row',
    marginTop: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 16,
    marginRight: 7,
    fontWeight: 'bold'
  },

  loginText: {
    color: '#163C9F',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default LoginScreen