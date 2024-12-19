import { View, Text, ScrollView, StyleSheet, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '../../store/actions/profileAction';

const RegisterScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  

  const globalProfileData = useSelector(store => store.profileReducer);

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  
  const onChangeInput = (inputType, value) => {
    setForm({
      ...form,
      [inputType]: value
    });
  };

  const sendData = () => {
    if (form.username === '' || form.email === '' || form.password === ''){
      Alert('Make sure you fill all the fields with the correct information!');
    } else {
      dispatch(createProfile(form));
    }
  };

  useEffect( () => {
    console.log('GLOBAL STATE ON REGISTER PAGE')
    console.log(globalProfileData);
  }, [globalProfileData]);

  useEffect( () => {
    console.log('LOCAL STATE');
    console.log('username: ' + form.username);
    console.log('email: ' + form.email);
    console.log('password: ' + form.password);
  }, [form])

  // useEffect( () => {
  //   dispatch(createProfile({
  //       username: 'Vedrico',
  //       email: 'yourEmail',
  //       password: 'yourPass'
  //     })
  //   )
  // }, []);

  
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.mainContainer}>
          <View style={styles.brandContainer}>
            <Image
              source={require('../../assets/images/logoBlue.png')}
              style={styles.logo} 
            />
            <Text style={styles.brandName}>
              Escape Route
            </Text>
          </View>

          <View style={styles.contentContainer}></View>
          <View style={styles.titles}>
            <Text style={styles.mainHeader}>Register Now!</Text>
            <Text style={styles.secondaryHeader}>Please enter your registration info here</Text>
          </View>
            <View style={styles.inputContainer}>
              <Input
                title="Username"
                placeholder="Username"
                onChangeText={
                  (text) => onChangeInput('username', text)
                }
              />
              <Input
                title="Email"
                placeholder="Email"
                onChangeText={ (text) => onChangeInput('email', text)}
              />
              <Input
                title="Password"
                placeholder="Password"
                onChangeText={ (text) => onChangeInput('password', text)}
              />
            </View>
            <Button
              text="Register"
              onPress={() => alert('Hello!')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={
                  () => navigation.navigate('Login')
                }
              >
                <Text style={styles.loginText}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create ({
  scroll: {
    flexGrow: 1
  },
  
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
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

  inputContainer: {
    padding: 16,
    width: '100%'
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

  textContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  text: {
    fontSize: 16,
    marginTop: 30,
    fontWeight: 'bold',
    marginRight: 7
  },

  loginText: {
    color: '#163C9F',
    fontSize: 16,
    marginTop: 30,
    fontWeight: 'bold'
  },


})

export default RegisterScreen