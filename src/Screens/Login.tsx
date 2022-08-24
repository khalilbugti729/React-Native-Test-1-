import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import CustomInput from '../Components/CustomInput';
import SubmitButton from '../Components/SubmitButton';
import DividerByHeight from '../Components/DividerByHeight';
import { StackActions } from '@react-navigation/native';
import SocialButton from '../Components/SocialButton';
import { Dimensions } from 'react-native';
import { LoginApi } from '../../Services/apis/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({ navigation }: any) => {



    //decide user already exist by using access_token goto home screen other wise strict here.
    useEffect(() => {
        getToken();
    }, [])



    // Form is initializing here
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Email: 'hassan.zafar@ropstam.com',
            Password: '12345678'
        }
    });

    // Some time react native not calculated the height or width out of box thats why we need this Dimension 
    const { height, width } = Dimensions.get('window');

    // Email have pattern which can be solved by regix a solution for validation
    const EMAIL_REGIX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onSubmit = async (loginData: any) => {
        console.log("data of form", loginData);
        // This function only run when validation completed
        try {
            const response = await LoginApi(loginData);
            if (response.data.meta.message === "Successfull") {
                setToken(response.data.data.access_token)
                navigation.dispatch(
                    StackActions.replace('HomeScreen')
                );
            }
            console.log("groos", JSON.stringify(response.data.meta.message))

        } catch (error) {
            console.log("error", error);
        }
    }


    const setToken = async (value: string) => {
        try {
            await AsyncStorage.setItem('@access_token', value)
        } catch (e) {
            // saving error
        }
    }
    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('@access_token')
            if (value !== null) {
                console.log("get value from", value);
                navigation.dispatch(
                    StackActions.replace('HomeScreen')
                );
            }
        } catch (e) {
            // error reading value
        }
    }


    return (
        <View style={{ height: "100%" }}>
            <ScrollView>
                <View style={{ height: height }}>
                    <Image
                        style={{ width: '100%', height: "100%" }}
                        source={require('../../Assets/Images/backgroundImage.png')}
                    />
                    <View style={{ position: 'absolute', right: 0, left: 0, bottom: 0, top: 0 }}>
                        <View style={{ flex: 1, marginHorizontal: 75, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 35, fontWeight: 'bold' }}>Hello Again!</Text>
                            <Text style={{ color: "black", fontSize: 23, textAlign: 'center' }}>Chance to get your life better</Text>
                        </View>
                        {/* We repeatly used height so that is better a component for future use */}
                        <DividerByHeight />
                        <DividerByHeight />
                        <View style={{ flex: 1.5, marginHorizontal: 30 }}>
                            {/*We used here 2 inputs email and password using react-hooks-form and placed own component*/}
                            <CustomInput
                                rules={{
                                    required: "Email is required", pattern: {
                                        value: EMAIL_REGIX,
                                        message: 'Email is Not Valid'
                                    }
                                }}
                                name={"Email"}
                                control={control}
                                placeholder={'Email'}
                            />
                            <DividerByHeight />
                            <CustomInput
                                rules={{
                                    required: "Password is required",
                                    minLength: {
                                        value: 5,
                                        message: 'Password should be more than 5'
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: 'Password should not be more than 15'
                                    }
                                }}
                                name={"Password"}
                                control={control}
                                placeholder={'Password'}
                                secureTextEntry
                            />
                            <Text onPress={() => { }} style={{ textAlign: 'right', marginVertical: 15 }}>Recovery Password</Text>
                            <DividerByHeight />
                            <SubmitButton onSubmit={handleSubmit(onSubmit)} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center' }}>or continue with</Text>
                            <DividerByHeight />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 55 }}>
                                {/*Becasue it repeating 3 time its better to make own component and dedicated name */}
                                <SocialButton image={require('../../Assets/Images/googleImage.png')} onSubmit={() => { }} />
                                <SocialButton image={require('../../Assets/Images/appleImage.png')} onSubmit={() => { }} />
                                <SocialButton image={require('../../Assets/Images/facebookImage.png')} onSubmit={() => { }} />
                            </View>
                            <DividerByHeight />
                            <Text style={{ textAlign: 'center' }}>Not a member? <Text onPress={() => { }} style={{ fontWeight: 'bold', color: '#01B145' }}>Register now</Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}
export default Login;
// where we define our styles of css you can say
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})