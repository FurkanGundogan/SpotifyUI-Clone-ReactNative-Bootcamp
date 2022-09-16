import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { imageUrl } from "../utils/lastfmAPI";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikeSong, likeSong } from "../store";
import { useEffect } from "react";
const MusicListItem = ({ item, url, index }) => {
  let size = 100 * index;
  let myurl = imageUrl + size + "/" + size;
  const [like, setlike] = useState(false)
  const dispatch=useDispatch()
 
  const triggerLike = () => {
    setlike(!like)
    if(like){
      dispatch(dislikeSong(item))
    }else{
      dispatch(likeSong(item))
    }
   
  }

  return (
    <TouchableOpacity
      style={styles.tabItemWrapper}
      
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: myurl,
          }}
        />
      </View>
      <View style={styles.tabItemRight}>
        <Text style={styles.tabItemMusicTitle}>
          {item?.name?.charAt(0).toUpperCase() + item?.name.slice(1)}
        </Text>
        <Text style={styles.tabItemText}>
          {item?.artist?.name?.charAt(0).toUpperCase() +
            item?.artist?.name.slice(1)}
        </Text>
      </View>
      <TouchableOpacity style={styles.iconWrapper} onPress={triggerLike}>
      <Ionicons name={like?"heart":"heart-outline"} size={32} color="green" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MusicListItem;

const styles = StyleSheet.create({
  tabItemWrapper: {
    paddingLeft:4,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom:8
  },
  tabItemRight: {
    marginLeft: 8,
  },
  tabItemMusicTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  tabItemText: {
    color: "gray",
    fontSize: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "gray",
  },
  image: {
    width: "100%",
    height: "100%",
  },icon:{
    color:"white"
  },
  iconWrapper:{
    position:"absolute",
    
    right:32
  }
});
