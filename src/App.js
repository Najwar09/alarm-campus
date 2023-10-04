import React from 'react';
import {  } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/Login';
import HomeScreen from './pages/Home';



const Stack = createNativeStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='login' component={LoginScreen}/>
            <Stack.Screen name='home' component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }