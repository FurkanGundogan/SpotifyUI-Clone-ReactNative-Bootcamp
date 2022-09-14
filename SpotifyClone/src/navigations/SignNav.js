import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SignNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Sign In" component={SignInScreen} />
          <Stack.Screen options={{headerShown:false}} name="Sign Up" component={SignUpScreen} />
        </Stack.Navigator>
      )
}

export default SignNav

const styles = StyleSheet.create({})