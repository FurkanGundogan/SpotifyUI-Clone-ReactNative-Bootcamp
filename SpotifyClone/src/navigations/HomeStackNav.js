import { StyleSheet} from 'react-native'
import React from 'react'
import Home from '../components/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TagDetailScreen from '../screens/TagDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStackNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HomeItemDetail" component={TagDetailScreen} 
          options={{title:"Category Playlist"}}
          />
        </Stack.Navigator>
      )
}

export default HomeStackNav

const styles = StyleSheet.create({})