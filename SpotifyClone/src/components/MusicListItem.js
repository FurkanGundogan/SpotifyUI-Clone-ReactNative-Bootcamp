import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { imageUrl } from "../utils/lastfmAPI";

const MusicListItem = ({ item, url, index }) => {
  let size = 100 * index;
  let myurl = imageUrl + size + "/" + size;
  console.log("item:", item);
  return (
    <TouchableOpacity
      style={styles.tabItemWrapper}
      onPress={() => goTagMusics(item?.name)}
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
  },
});
