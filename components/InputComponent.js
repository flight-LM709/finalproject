import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export const Input = (props) => {
    // const { placeholder, title } = props;
    return (
        <View style={styles.mainContainer}>
            {/* <View style={styles.titleContainer}>
                <Text>{title}</Text>
            </View> */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    // {...props}
                    {...props}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 8
    },

    titleContainer: {
        marginLeft: 16
    },

    inputContainer: {
        borderRadius: 10,
        margin: 8,
        backgroundColor: "#F1F6FB"
    },

    input: {
        padding: 8,
        flex: 1,
        color: 'black'
    }
})