import { StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingForLoginScreen from "./LoadingForLoginScreen";
import SignNav from "../navigations/SignNav";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signIn } from "../store";
import MainBottomNav from "../navigations/MainBottomNav";
const Auth = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const myauth = useSelector((state) => state.auth);
  //console.log("redux user:", myauth);

  const getUserFromLocal = async () => {
    const value = await AsyncStorage.getItem("@user");
    
    //console.log("local val:", value);
    if (value !== null) {
      let myval = JSON.parse(value);
      const { email, password } = myval;
      //console.log("local email:", email);
      //console.log("password:", password);

      signInWithEmailAndPassword(auth, email, password).then((response) => {
        //console.log("response:", response);
        dispatch(
          signIn({
            email: email,
            password: password,
          })
        );
        //console.log("Local User Sign In Complete reduxa yazildi");
        setloading(false);
      });
      
    } else {
      setloading(false);
    }
  };

  useEffect(() => {
    setloading(true);
    getUserFromLocal();
  }, []); // eslint-disable-next-line no-console

  return (
    <>
      {myauth.user ? (
        <MainBottomNav />
      ) : loading ? (
        <LoadingForLoginScreen />
      ) : (
        <SignNav />
      )}
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({});
