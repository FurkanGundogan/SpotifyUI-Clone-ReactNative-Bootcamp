import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logOut } from '../store';
const HomeStackNav = () => {
  const dispatch=useDispatch()
  const logout = async () => {
    dispatch(logOut(null));
    await AsyncStorage.removeItem('@user');
  };
  return (
    <SafeAreaView>
      <Text>HomeStackNav</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeStackNav

const styles = StyleSheet.create({})