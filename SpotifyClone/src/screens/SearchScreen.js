import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import TagList from "../components/TagList";
import { LastFmAPIKey, LastFmUrl } from "../utils/lastfmAPI";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import GenreList from "../components/GenreList";
import SearchResults from "../components/SearchResults";
import SearchInput from "../components/SearchInput";
import { setSearchTags } from "../store";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    const res = await axios
      .get(LastFmUrl, {
        params: {
          method: "chart.gettoptags",
          api_key: LastFmAPIKey,
          format: "json",
        },
      })
      .then((response) => {
        dispatch(setSearchTags(response?.data?.tags?.tag?.slice(7, 13)));
      });
  };
  return (
    <View style={styles.bg}>
      <SearchInput input={input} setinput={setinput} />
      {input === "" ? (
        <>
          <Text style={styles.genretitle}>Find in Genres</Text>
          <GenreList />
        </>
      ) : (
        <SearchResults input={input} />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "black",
    flex: 1,
  },
  genretitle: {
    color: "white",
    fontWeight: "800",
    fontSize: 24,
    marginLeft: 16,
    marginTop: 12,
    marginBottom: 12,
  },
});
