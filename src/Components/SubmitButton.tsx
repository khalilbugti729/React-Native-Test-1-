import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface SubmitButtonProps {
    onSubmit: (event: GestureResponderEvent) => void,
}
const SubmitButton = (props: SubmitButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onSubmit} style={styles.container}>
            <Text style={styles.buttonText}>
                Login
            </Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#01B145",
        padding: 17,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        fontWeight:'bold'
    }
})