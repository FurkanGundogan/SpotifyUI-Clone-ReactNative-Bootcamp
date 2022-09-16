import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ThemeArea from "../components/ThemeArea";
import { useDispatch } from "react-redux";
import { logOut } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileEditScreen = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch(logOut());
    await AsyncStorage.removeItem("@user");
  };
  return (
    <View style={styles.container}>
      <ThemeArea />
      <TouchableOpacity
        style={{ ...styles.btn, ...styles.btnLogout }}
        onPress={logout}
      >
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    marginTop: 8,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 12,
    textAlign: "center",
  },
  btnLogout: {
    position: "absolute",
    bottom: 24,
    width: 100,
    backgroundColor: "red",
    alignSelf: "center",
  },
});
