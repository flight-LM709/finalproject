import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ForgotPasswordScreen = (props) => {
  const {navigation} = props

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 48, fontWeight: '700'}}>IDK  ¯\_(ツ)_/¯</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{marginTop: 50}}>Return</Text>
      </TouchableOpacity>
    </View>
  )
};

export default ForgotPasswordScreen