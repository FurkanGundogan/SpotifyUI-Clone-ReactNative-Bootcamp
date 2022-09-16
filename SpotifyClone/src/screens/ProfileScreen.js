import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserInfo from "../components/UserInfo";
import LikedMusicList from "../components/LikedMusicList";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Your Favourites</Text>
      </View>
      <LikedMusicList />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  title: {
    fontWeight: "800",
    color: "white",
    marginLeft:16,
    fontSize:24
  },titleWrapper:{
    marginBottom:12
  }
});
