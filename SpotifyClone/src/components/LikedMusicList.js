import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import MusicListItem from './MusicListItem';
import { imageUrl } from '../utils/lastfmAPI';

const LikedMusicList = () => {
    const likedSongs = useSelector((state) => state?.likedSongs);
  return (
    <FlatList
    style={styles.tabsContainer}
    showsHorizontalScrollIndicator={false}
    data={likedSongs}
    renderItem={({ item, index }) => (
      <MusicListItem item={item} url={imageUrl} index={index} />
    )}
  />
  )
}

export default LikedMusicList

const styles = StyleSheet.create({
    tabsContainer: {
        paddingLeft:12,
       borderColor:"white",
       borderBottomWidth:2
      },
})