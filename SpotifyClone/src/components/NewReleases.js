import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicListItem from "./MusicListItem";
import { imageUrl, LastFmAPIKey, LastFmUrl } from "../utils/lastfmAPI";
import { setHomeNewReleases } from "../store";
import { useEffect } from "react";
import axios from "axios";
const NewReleases = () => {
  const homeNewReleases = useSelector((state) => state?.homeNewReleases);
  const dispatch = useDispatch();
  useEffect(() => {
    getNewReleases();
  }, []);

  const getNewReleases = async () => {
    const res = await axios
      .get(LastFmUrl, {
        params: {
          method: "geo.gettoptracks",
          country: "turkey",
          api_key: LastFmAPIKey,
          format: "json",
        },
      })
      .then((response) => {
        dispatch(
          setHomeNewReleases(response?.data?.tracks?.track?.slice(0, 10))
        );
      });
  };
  return (
    <FlatList
      style={styles.tabsContainer}
      showsHorizontalScrollIndicator={false}
      data={homeNewReleases}
      renderItem={({ item, index }) => (
        <MusicListItem item={item} url={imageUrl} index={index} />
      )}
    />
  );
};

export default NewReleases;

const styles = StyleSheet.create({
  tabsContainer: {
    paddingLeft:12,
    backgroundColor: "black",
  },
});
