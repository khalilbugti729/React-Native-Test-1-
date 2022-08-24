import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomCard = ({ children }: any) => {
    return (
        <View style={styles.container} >
            {children}
        </View>
    )
}

export default CustomCard

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'white'
    }
})