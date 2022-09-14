import {Alert, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
//import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../store';
import LoadingForLoginScreen from './LoadingForLoginScreen';
import HomeStackNav from '../navigations/HomeStackNav';
import SignNav from '../navigations/SignNav';
const Auth = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const user = useSelector(state => state.user);
  console.log('redux user:', user);

  const getUserFromLocal = async () => {
  
      const value = await AsyncStorage.getItem('@user'); // eslint-disable-next-line no-console
      // eslint-disable-next-line no-console
      console.log('local val:', value);
      if (value !== null) {
        let myval = JSON.parse(value);
        const {email, password} = myval;
        /*axios
          .get(
            `http://192.168.1.20:3000/users?email=${email}&password=${password}`,
          )
          .then(response => {
            console.log('auto login user', response.data?.[0]);
            dispatch(setUser(response.data?.[0]));
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => setloading(false));*/
          console.log("Giris İslemi Yap")
          setloading(false)
      }else{
        setloading(false)
      }
    
  };

  useEffect(() => {
    setloading(true);
    getUserFromLocal();
  }, []); // eslint-disable-next-line no-console

  return (
    <>
      {user ? <HomeStackNav /> : loading ? <LoadingForLoginScreen /> : <SignNav />}
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({});