import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DividerByWidth = () => {
    return (
        <View style={styles.container}></View>
    )
}

export default DividerByWidth

const styles = StyleSheet.create({
    container: {
        width: 20
    }
})