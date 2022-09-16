import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useEffect } from "react";
import { imageUrl, LastFmAPIKey, LastFmUrl } from "../utils/lastfmAPI";
import axios from "axios";
import { setSearchResults } from "../store";
import { useDispatch, useSelector } from "react-redux";
import MusicListItem from "./MusicListItem";
import SearchListItem from "./SearchListItem";

const SearchResults = ({ input }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMusics();
  }, [input]);

  const getMusics = async () => {
    const res = await axios
      .get(LastFmUrl, {
        params: {
          method: "track.search",
          api_key: LastFmAPIKey,
          format: "json",
          track: input,
        },
      })
      .then((response) => {
        dispatch(
          setSearchResults(response?.data?.results?.trackmatches?.track)
        );
      });
  };

  const searchResults = useSelector((state) => state?.searchResults);
  return (
    <View>
      {searchResults && (
        <FlatList
          style={styles.tabsContainer}
          showsHorizontalScrollIndicator={false}
          data={searchResults}
          renderItem={({ item, index }) => (
            <SearchListItem item={item} url={imageUrl} index={index} />
          )}
        />
      )}
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  co: { color: "white" },
  tabsContainer: {
    paddingLeft: 12,
    backgroundColor: "black",
    marginBottom:12
  },
});
