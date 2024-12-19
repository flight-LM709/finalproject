import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export const Button = (props) => {
    const { text } = props;

  return (
    <View style={styles.buttonContainer} {...props}>
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    </View>
  )
};

const styles= StyleSheet.create({
    buttonContainer: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#163C9F'
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 24,
        paddingRight: 24,
    },
    text: {
        fontWeight: 'bold',
        color: '#F2F2F2'
    }
})

