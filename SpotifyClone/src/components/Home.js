import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { LastFmAPIKey, LastFmUrl } from "../utils/lastfmAPI";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setHomeTags } from "../store";
import TagList from "./TagList";
import { useState } from "react";
const Home = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const homeTags = useSelector(state => state?.homeTags);
  //console.log("redux home tags:",homeTags)
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
    <View>
      <Text>Home</Text>
      <TagList/>
      <TouchableOpacity onPress={() => navigation.navigate("HomeItemDetail")}>
        <Text>Go Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
