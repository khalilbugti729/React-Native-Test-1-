import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

const CustomInput = ({ control, name, placeholder, secureTextEntry, rules = {} }: any) => {
    return (
        <View>
            <Controller
                control={control}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                        <TextInput
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={secureTextEntry}
                            style={[styles.input, { borderColor: error ? 'red' : '#C9C9C9' }]} />
                        {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error?.message || "Error"}</Text>}
                    </>
                )}
                name={name}
            />
        </View>
    );
}
export default CustomInput;
const styles = StyleSheet.create({
    input: {
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 8
    }
})