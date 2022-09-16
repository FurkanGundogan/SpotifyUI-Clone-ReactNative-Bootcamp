import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen'
const Stack = createNativeStackNavigator();

const ProfileStackNav = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="ProfileScreen" options={{title:"Profile"}} component={ProfileScreen} />
    <Stack.Screen name="ProfileEdit" options={{title:"Profile Edit"}} component={ProfileEditScreen} />
    
  </Stack.Navigator>
  )
}

export default ProfileStackNav

const styles = StyleSheet.create({})