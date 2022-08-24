import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DividerByHeight = () => {
    return (
        <View style={styles.container}></View>
    )
}

export default DividerByHeight

const styles = StyleSheet.create({
    container: {
        height: 25
    }
})