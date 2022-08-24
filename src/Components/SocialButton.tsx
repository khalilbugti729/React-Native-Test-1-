import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface SubmitButtonProps {
    onSubmit: (event: GestureResponderEvent) => void,
    image: ImageSourcePropType
}
const SocialButton = (props: SubmitButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onSubmit} style={styles.container}>
            <Image
                style={styles.img}
                source={props.image}
            />
        </TouchableOpacity>
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 15
    },
    img: { width: 30, height: 30 }
})