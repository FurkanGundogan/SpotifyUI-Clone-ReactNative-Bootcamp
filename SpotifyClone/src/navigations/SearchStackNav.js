import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchScreen from '../screens/SearchScreen'
import SearchGenreList from '../screens/SearchGenreList'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const SearchStackNav = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Search"  component={SearchScreen} />
    <Stack.Screen name="SearchGenreList" component={SearchGenreList} 
    options={{title:"Genre Playlist"}}
    />
  </Stack.Navigator>
  )
}

export default SearchStackNav

const styles = StyleSheet.create({})