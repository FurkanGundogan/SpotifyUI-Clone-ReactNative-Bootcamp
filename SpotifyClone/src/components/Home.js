import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { LastFmAPIKey, LastFmUrl } from "../utils/lastfmAPI";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setHomeTags } from "../store";
import TagList from "./TagList";

import NewReleases from "./NewReleases";
const Home = () => {

  const dispatch=useDispatch()

  const likedSongs = useSelector(state => state?.likedSongs);
  //console.log(likedSongs)
  useEffect(() => {
    getCtgs()
  }, []);

  const getCtgs = async () => {
    const res = await axios.get(LastFmUrl, {
      params: {
        method: "chart.gettoptags",
        api_key: LastFmAPIKey,
        format: "json",
      },
    }).then((response)=>{
        dispatch(setHomeTags(response?.data?.tags?.tag?.slice(0,6)))
    });
  };

  return (
    <>
      <TagList/>
      <View style={styles.NewReleasesTitleWrapper}>
      <Text style={styles.NewReleasesTitle}>NEW RELEASES FROM TURKEY</Text>
      </View>
      <NewReleases/>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  NewReleasesTitleWrapper:{
    paddingTop:-12,
    padddingBottom:8,
    backgroundColor:"black",
    height:40
  },
  NewReleasesTitle:{
    color:"white",
    fontSize:16,
    textAlign:"center",
    backgroundColor:"black",
    fontWeight:"800"
  }
});
