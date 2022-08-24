import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Remove the token when logout function called
const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('@access_token')
  } catch (e) {
    console.log(e);
  }
}
const Stack = createNativeStackNavigator();

const App = () => {

  // Register the 2 screens for requirements
  // initial load login screen


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Home", headerRight: () => (
              <TouchableOpacity onPress={() => {
                removeToken();
                navigation.dispatch(
                  StackActions.replace('LoginScreen')
                );
              }}>
                <Text>Logout</Text>
              </TouchableOpacity>
            ),
          })} name="HomeScreen" component={Home} />
        <Stack.Screen options={{
          headerShown: false
        }} name="LoginScreen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;