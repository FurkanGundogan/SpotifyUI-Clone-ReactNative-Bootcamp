import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState } from "react";
import { setUser } from "../store";
// import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signIn } from "../store/index";
const SignInForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const initialState = {
    id: "0",
    email: "furkangundogan14@outlook.com",
    password: "123123",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jason_Statham_at_Marvel-Rolle.jpg/640px-Jason_Statham_at_Marvel-Rolle.jpg",
  };
  const [userInfo, setuserInfo] = useState(initialState);
  const handleChange = (e, name) => {
    setuserInfo((prevState) => ({
      ...prevState,
      [name]: e,
    }));
    //console.log(userInfo);
  };

  const login = () => {
    const email = userInfo?.email;
    const password = userInfo?.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch(
          signIn({
            email: email,
            password: password,
          })
        );
        submitUserToLocal({email,password})
        Alert.alert("Sign In Complete",response.user.email)
      })
      .catch((err) => {
        Alert.alert(err)
        
      });

    //console.log("giris istegi");
  };
  
  const submitUserToLocal = async (data) => {
    const backupinfo = { ...data };
    const jsonValue = JSON.stringify(backupinfo);
    await AsyncStorage.setItem("@user", jsonValue);
    //console.log("user locale set completed:", data);
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.APPtitle}>Spotify</Text>
      <Text style={styles.title}>SIGN IN</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={userInfo?.email}
        onChangeText={(e) => handleChange(e, "email")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        value={userInfo?.password}
        onChangeText={(e) => handleChange(e, "password")}
      />
      <TouchableOpacity style={styles.submitbutton} onPress={login}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.askText}>Dont't have an account?</Text>
      <TouchableOpacity
        style={styles.submitbutton}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.buttonText}>SIGN UP NOW !</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 128,
  },
  APPtitle: {
    fontWeight: "800",
    fontSize: 24,
    color: "#18782e",
    textAlign: "center",

    textShadowRadius: 4,
    textShadowColor: "#33382c",
    marginBottom: 32,
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
    color: "black",
    textAlign: "center",

    textShadowRadius: 4,
    textShadowColor: "#33382c",
    marginBottom: 32,
  },
  textInput: {
    backgroundColor: "white",
    color: "gray",
    fontSize: 12,
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 16,
    height: 40,
    padding: 8,
    borderColor: "#18782e",
    borderWidth: 1,

    fontWeight: "400",
  },
  submitbutton: {
    marginTop: 8,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: "#18782e",
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 12,
    textAlign: "center",
  },
  askText: {
    marginTop: 64,
    textAlign: "center",
    color: "blue",
  },
});
