import { StyleSheet} from 'react-native'
import React from 'react'
import Home from '../components/Home';
import HomeItemDetail from '../components/HomeItemDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStackNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HomeItemDetail" component={HomeItemDetail} 
          options={{title:"Home Item Detail"}}
          />
        </Stack.Navigator>
      )
}

export default HomeStackNav

const styles = StyleSheet.create({})